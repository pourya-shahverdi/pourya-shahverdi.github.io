# Google Scholar Publication Sync

The site synchronizes publications from the Google Scholar profile `lhc1WDQAAAAJ` every Monday and can also be run manually from the **Sync Google Scholar Publications** GitHub Action.

Google Scholar does not provide an official API and rejects unattended requests. The workflow therefore uses SerpApi's Google Scholar Author endpoint, which is purpose-built for this use case and keeps the credential out of the repository.

Before enabling the workflow, add a repository Actions secret named `SERPAPI_API_KEY` with an API key from SerpApi. The workflow adds only titles that are not already present in `publications.bib`, regenerates the Hugo publication pages, and opens a pull request for review.

The homepage displays the ten most recent publications. Hugo Blox automatically shows a link to the Publications archive whenever additional entries exist.