# CLAUDE.md — Portfolio Redesign Blueprint (Astro + Crisp Swiss Minimal)

## 1. Objective
Rebuild `https://pourya-shahverdi.github.io/` from scratch by migrating from Hugo/Hugo Blox to **Astro + Tailwind CSS + Markdown Content Collections**.
The site must position **Pourya Shahverdi** for two target tracks:
1. **Priority 1 (Lead):** Applied Scientist in Social HRI & Affective AI (humanoid robots, virtual avatars, voice agents).
2. **Priority 2 (Secondary):** Forward-Deployed Robotics Engineer (Physical AI, live system integration, deployment with real users).

## 2. Architecture & Tech Stack
- **Framework:** Astro (static output) + Tailwind CSS + TypeScript.
- **Content:** Astro Content Collections (`src/content/projects/` for deep project write-ups; `src/data/publications.ts` and `src/data/demos.ts` for structured data).
- **Layout:** Single scrolling homepage (`/`) + dedicated editorial sub-pages for each flagship project (`/projects/[slug]/`).
- **Deployment:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml` using `withastro/action`). Remove the legacy Hugo `public/`, `layouts/`, `config/`, `resources/`, and `themes/` directories once Astro is verified.
- **Assets to preserve:** Keep any useful images/media from `assets/` or `content/` and move them to `public/media/` or `src/assets/`. Keep `public/uploads/` for the latest CV PDF (placeholder link `/uploads/PouryaShahverdiCV.pdf`; do not link `PouryaShahverdiAug2026CV.pdf`).

## 3. Visual Design System: Crisp Swiss Minimal
- **Aesthetic:** Editorial, high-craft Swiss minimal (inspired by Linear, Stripe Docs, and modern AI research labs). Generous whitespace, razor-sharp typographic hierarchy, `1px` hairline borders, zero heavy drop shadows, zero generic academic-template clutter.
- **Color Palette:**
  - **Light mode (default):** Background `#FAFAFA`, surface cards `#FFFFFF`, primary text `#111827`, secondary text `#4B5563`, hairline borders `#E5E7EB`, restrained accent `#1D4ED8` (deep cobalt) or `#0F766E` (muted teal).
  - **Dark mode (toggleable):** Background `#0B0D10`, surface cards `#111418`, primary text `#F3F4F6`, secondary text `#9CA3AF`, hairline borders `#1F2937`, accent `#60A5FA` (or `#2DD4BF`).
  - Persist theme preference in `localStorage` with a no-flash inline script in `<head>` and a minimal sun/moon toggle in the sticky nav.
- **Typography:**
  - Sans-serif: `Inter` (or `Geist`) for headings and body. Tight tracking (`-0.02em`) on headings.
  - Monospace: `JetBrains Mono` for tech-stack tags, venue badges, dates, and metric labels.
- **Layout Width:** Max container width `max-w-5xl` (`1024px`) for the homepage; `max-w-3xl` (`768px`) for project write-up prose.

## 4. Page Structure

### A. Sticky Minimal Nav
- Left: `Pourya Shahverdi` (links to `/`)
- Right: `Demos` (`#demos`), `Projects` (`#projects`), `Publications` (`#publications`), `Background` (`#background`), `CV` (subtle pill button), and Light/Dark toggle.

### B. Homepage Sections (`/`)
1. **Hero & Impact Strip**
   - **Name & Role:** Pourya Shahverdi — Applied Scientist (HRI & Affective AI) · Robotics Engineer · Ph.D. Candidate in ECE, Oakland University (defense scheduled Dec 2026).
   - **Bio (2–3 sentences):** Over a decade of robotics engineering experience building conversational humanoid and social robots and evaluating them with real participants. Specializes in context-aware verbal and nonverbal behavior (turn-taking, backchanneling, facial affect) driven by LLMs/VLMs and real-time multimodal perception.
   - **Status Pill (green dot):** `Open to Applied Scientist & Forward-Deployed Robotics roles · Open to relocation · No visa sponsorship required`
   - **Action Row:** Primary `Download CV` button + icon/text links for Email (`pourya.shahverdi@gmail.com`), Google Scholar, GitHub, LinkedIn, YouTube, ORCID, X.
   - **Impact Strip (4-column grid):**
     - `17` Papers *(9 first/co-first · ICRA, IROS, RO-MAN)*
     - `66` Study Participants *(396 rehearsals · 1,188 affect reports)*
     - `4.19M` Perception Events Logged *(~18 ms emotion inference)*
     - `135` Autonomous Trials *(live two-robot deployment)*

2. **Robots in Action (`#demos`)**
   - 2×2 (or 3×2) grid of crisp video cards with thumbnails, short title, and venue badge.
   - Clicking a card opens a lightweight **vanilla JS lightbox modal** that loads the YouTube embed on demand (keeps initial page load fast and clean).
   - Include demos:
     - Emotional Backchanneling & Storytelling (`IROS '23 / ICRA '24`) — `https://www.youtube.com/watch?v=M8Xl5e82oYw`
     - Robot-Mediated Job Interview Training (`RO-MAN '23`) — `https://youtu.be/3fq4s9N5VQs`
     - Group Instruction for Children with Autism (`RO-MAN '22`) — `https://youtu.be/c37KEdAKoII`
     - Whole-Body Human Motion Imitation on NAO (`ICRoM '16/'17`) — `https://youtu.be/0c-mpC6NMfY`
     - Older-Adult Physical Activity & Fall Prevention (`Cureus '23`) — `https://youtu.be/MuxEg3ArODg`
     - STEM Vocabulary Instruction (`RO-MAN '24`) — `https://youtu.be/QGJQFk0llzI`

3. **Featured Systems & Projects (`#projects`)**
   - 2-column grid of **5 flagship cards**, each with: Title, 1–2 line summary, monospace stack tags, GitHub link (where public), and `Read write-up →` linking to `/projects/<slug>/`:
     1. **Affective HRI & Real-Time Perception Stack** (`affective-hri-platform`): 66-participant Furhat BST study (IEEE TAFFC under review), 10-service Docker/WebRTC perception platform (~18 ms emotion inference), FastAPI/SQLite data platform (4.19M events; WAL + indexing fix cutting summary poll from ~8.2s to ~0.07s), on-prem Llama 3.3 70B on 3× RTX 6000 Ada GPUs.
     2. **MakiMate: Open-Source Conversational Robot** (`makimate`): Technical Lead & Mentor; modular ROS 2 packages, Vosk + Ollama + Piper TTS streaming loop, face tracking, 15 students across 3 senior-design teams. Badge: `1st Place & Public Vote, 2026 Graduate Students Showcase`.
     3. **Autonomous Two-Robot Trainer & Failure Analysis** (`robot-bst-codesign`): Co-designed with behavior analysts (Furhat + NAO), 135 autonomous trials across 5 skills, separating trainee mistakes from ASR/vision/LLM errors; all participants reached 80% mastery (`IEEE RO-MAN 2026`).
     4. **Conversational Dynamics: Backchanneling & Turn-Taking** (`conversational-dynamics`): 28-participant storytelling study (2.4× emotional backchannels with robot, `IROS 2023`, `ICRA 2024*`) + LSTM multimodal turn-taking from 150 speaking turns (`IROS 2022`).
     5. **Humanoid Control, Imitation & Few-Shot LfD** (`humanoid-control-lfd`): NAO whole-body imitation, geometric arm IK, ankle-strategy PID balance control (`ICRoM '16/'17`), VR/Kinect Pepper teleoperation (`Cureus '23`), and co-advised few-shot humanoid manipulation (`arXiv 2026`: 78% pick-and-place from 16 demos).
   - Below the 5 cards, add a compact **More Applied HRI & Robotics Work** list (1-line entries) for: Multimodal PAD Recognition (Mentor; initial single-split CCC 0.56), Autism/Preschool/STEM HRI Studies, Tripteron 3-DOF Parallel Robot Control (`RAS 2018`), and LiDAR/Radar/Vision EKF Fusion.

4. **Publications (`#publications`)**
   - Interactive client-side filter pills: `Selected (First/Co-First)` (default) · `All (18)` · `Journals (4)` · `Conferences (12)` · `Preprints & Under Review (2)`.
   - Auto-bold `P. Shahverdi` in every author list.
   - Highlight `IEEE RO-MAN 2022 Outstanding Early Career Scientist Paper Award` with a subtle badge.
   - Tidy inline action buttons per paper: `DOI` / `IEEE` / `arXiv`, `Demo` (if available), `Code` (if available), and `BibTeX` (one-click copy to clipboard with "Copied!" feedback).

5. **Recognition, Leadership & Toolbox (`#background`)**
   - Clean 2-column split:
     - **Left (Honors & Service):** IEEE RO-MAN 2022 Award, MakiMate 1st Place (2026), Highest ECE Teaching Score (EGR-2800), NSF-funded Ph.D., NIW Permanent Residency, RoboCup Humanoid League, AI Advisory Board Member (OU School of Business), FIRA Education Chair, Peer Reviewer (HRI, ICRA, IROS, RO-MAN, RA-L, IJSR).
     - **Right (Education & Technical Stack):** Ph.D. Oakland University (Dec 2026), M.Sc. Mechatronics (UT/Qazvin), B.Sc. Robotics (HUT) + compact 6-group skill matrix (Programming/Systems, AI/ML, Interaction/Perception, Robotics/Sim, Embedded/Hardware, Research Methods).

6. **Footer**
   - Minimal: `© 2026 Pourya Shahverdi` on the left, `Back to top ↑` on the right. No template credits.

### C. Project Sub-Pages (`/projects/[slug]/`)
- `← Back to Home` link at top.
- Editorial header: Title, 1-line summary, metadata row (Role, Year, Stack), action buttons (`GitHub`, `Paper`, `Demo Video`).
- Structured Markdown sections: **Overview & Challenge**, **System Architecture**, **Evaluation & Results**, **Key Takeaways**.
- `← Previous Project` / `Next Project →` navigation at the bottom.

## 5. Strict Accuracy Guardrails (DO NOT VIOLATE)
- **Author order:** Say `first- and co-first-author` (never claim sole first-author on ICRA 2024). List co-first papers in exact published order with `*`: `I. Bakhoda*, P. Shahverdi*` (ICRA 2024) and `M. Trombly*, P. Shahverdi*` (RO-MAN 2022).
- **Exact roles:**
  - MakiMate: `Technical Lead and Mentor`
  - Multimodal PAD Recognition: `Mentor` (and explicitly label `0.56 CCC` as an `initial single-split experiment`)
  - Few-Shot Humanoid LfD: `Co-Advisor`
- **No false stack claims:** The BST Data Collection Platform uses `FastAPI, SQLAlchemy, SQLite, HTML/JS` — do NOT list React.
- **No fabricated metrics:** Only use verbatim numbers from the specs above.

## 6. Build & Verification Workflow
1. Inspect the current repo to see what files exist in `.github/workflows` and `content/`.
2. Initialize Astro + Tailwind CSS in the repo root without losing `uploads/` or git history.
3. Build the design system, homepage, lightbox modal, publication filter + BibTeX copy, and all 5 project sub-pages.
4. Run `npm run build` and fix any TypeScript, Astro, or Tailwind errors until the build succeeds cleanly.
5. Update `.github/workflows/deploy.yml` for Astro → GitHub Pages deployment.