#!/usr/bin/env python3
"""Append publications from a Google Scholar profile to a BibTeX file."""

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path


SERPAPI_URL = "https://serpapi.com/search.json"


def normalize(value: str) -> str:
    return re.sub(r"[^a-z0-9]", "", value.lower())


def bibtex_escape(value: str) -> str:
    return (
        value.replace("\\", "\\\\")
        .replace("{", "\\{")
        .replace("}", "\\}")
        .replace("&", "\\&")
    )


def fetch_profile(author_id: str, api_key: str) -> list[dict]:
    query = urllib.parse.urlencode(
        {
            "engine": "google_scholar_author",
            "author_id": author_id,
            "api_key": api_key,
            "num": 100,
        }
    )
    request = urllib.request.Request(f"{SERPAPI_URL}?{query}", headers={"Accept": "application/json"})
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            payload = json.load(response)
    except urllib.error.HTTPError as error:
        raise RuntimeError(f"SerpApi request failed with HTTP {error.code}.") from error
    except urllib.error.URLError as error:
        raise RuntimeError(f"Could not reach SerpApi: {error.reason}.") from error

    if "error" in payload:
        raise RuntimeError(f"SerpApi returned an error: {payload['error']}")

    articles = payload.get("articles")
    if not isinstance(articles, list):
        raise RuntimeError("SerpApi response did not include a publication list.")
    return articles


def entry_for(article: dict) -> str | None:
    title = article.get("title", "").strip()
    if not title:
        return None

    citation_id = re.sub(r"[^A-Za-z0-9_-]", "", str(article.get("citation_id", "")))
    key = f"scholar_{citation_id or normalize(title)[:48]}"
    authors = article.get("authors", "").strip()
    publication = article.get("publication", "").strip()
    year = str(article.get("year", "")).strip()
    link = article.get("link", "").strip()

    fields = [f"  title = {{{bibtex_escape(title)}}}"]
    if authors:
        fields.append(f"  author = {{{bibtex_escape(authors)}}}")
    if year.isdigit() and len(year) == 4:
        fields.append(f"  year = {{{year}}}")
    if publication:
        fields.append(f"  howpublished = {{{bibtex_escape(publication)}}}")
    if link:
        fields.append(f"  url = {{{bibtex_escape(link)}}}")
    fields.append("  note = {Imported from Google Scholar}")
    return f"@misc{{{key},\n" + ",\n".join(fields) + "\n}\n"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--author-id", required=True, help="Google Scholar author ID")
    parser.add_argument("--bibtex", type=Path, default=Path("publications.bib"), help="BibTeX file to update")
    arguments = parser.parse_args()

    api_key = os.environ.get("SERPAPI_API_KEY")
    if not api_key:
        print("SERPAPI_API_KEY is required.", file=sys.stderr)
        return 2

    bibtex_path = arguments.bibtex.resolve()
    if not bibtex_path.is_file():
        print(f"BibTeX file not found: {bibtex_path}", file=sys.stderr)
        return 2

    existing_bibtex = bibtex_path.read_text(encoding="utf-8")
    existing_titles = set(re.findall(r'title\s*=\s*[{\"]([^}\"]+)', existing_bibtex, flags=re.IGNORECASE))
    normalized_titles = {normalize(title) for title in existing_titles}

    new_entries = []
    for article in fetch_profile(arguments.author_id, api_key):
        title = article.get("title", "").strip()
        if title and normalize(title) not in normalized_titles:
            entry = entry_for(article)
            if entry:
                new_entries.append(entry)
                normalized_titles.add(normalize(title))

    if not new_entries:
        print("Google Scholar is already in sync.")
        return 0

    with bibtex_path.open("a", encoding="utf-8") as bibtex_file:
        bibtex_file.write("\n" + "\n".join(new_entries))
    print(f"Added {len(new_entries)} publication(s) from Google Scholar.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())