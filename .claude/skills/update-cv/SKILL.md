---
name: update-cv
description: Add or amend a work, education or volunteer entry in the CV data at src/data/cv.ts. Use when the user mentions a new or changed job, role, title, employer, internship, degree, school, or volunteer position — e.g. "I started as a communications advisor at X", "add my role at Y", "I finished my master at Kristiania", "add my board position", "update my CV". Handles Norwegian period formatting, reverse-chronological placement, and the PR-based commit convention.
---

# Update CV Skill

Update the [CV data file](../../../src/data/cv.ts) when the user mentions new or changed experience.

## Trigger Criteria

Invoke when the user's input describes an entry in one of the three arrays — see the
[template](./TEMPLATE.md) for the exact fields.

| Array | Minimum required |
| --- | --- |
| `experience` | title/role, company, time range |
| `education` | degree, institution, time range |
| `volunteer` | role, organization, time range |

If a required field is missing, **ask for it rather than guessing**.

## Workflow

1. **Identify the array** — `experience`, `education` or `volunteer` — from context.
2. **Extract the required fields.**
3. **Ask about the optional fields** rather than silently omitting them:
   - `experience.type` — exactly one of `Heltid`, `Deltid`, `Prosjektbasert`. Omit the key entirely if
     the role is none of those; several existing entries do.
   - `experience.description` — one or two sentences on the work, in Norwegian.
   - `education.details` — specialisation, exchange, or `Deltid`.
   - `volunteer` has **no** optional fields. Don't invent a description for it.
4. **Format the period** — see below. This differs per array; get it wrong and the entry looks
   obviously pasted-in.
5. **Insert at the right index** — see Ordering.
6. **Verify** before committing:
   ```bash
   pnpm lint && pnpm types:check && pnpm prettier:check
   ```
7. **Confirm with the user**, then commit on a branch with THIS EXACT message:
   ```bash
   git checkout -b cv/<short-slug>
   git add src/data/cv.ts
   git commit -m 'chore: update CV 💼'
   ```
8. **Open a PR** — `main` is protected, a direct push is rejected:
   ```bash
   git push -u origin HEAD
   gh pr create --fill
   ```
   Merge once the **Lint, types, format & tests** check is green (`gh pr checks`). Merging to `main`
   is what deploys the site.

## Period Format

`period` is an opaque Norwegian display string. **The convention differs per array — copy the
neighbours in the array you're editing, not the ones next to it.**

- **`experience` — month precision.** `'nov. 2023 - Nå'`, `'aug. 2021 - jan. 2023'`, `'okt. 2018'`
  for a single month. Ongoing is **`Nå`**.
- **`education` and `volunteer` — years only.** `'2023 - d.d.'`, `'2022 - 2023'`, `'2013'` for a
  single year. Ongoing is **`d.d.`**.

Norwegian month abbreviations: `jan. feb. mar. apr. mai jun. jul. aug. sep. okt. nov. des.` — `mai`
takes no trailing period; every other month does.

## Ordering

All three arrays are strictly **reverse-chronological by start date** — newest first.

- An ongoing entry (`Nå` / `d.d.`) sorts above every ended one.
- Compare **start** dates, not end dates.
- Do **not** group by employer or institution. `education` deliberately lists Norges idrettshøgskole
  twice, non-contiguously, because an OsloMet degree sits between them chronologically.

Nothing sorts these arrays at runtime and nothing validates the order — array order _is_ the rendered
order, so getting the insertion index right is the whole job.

## Where each array renders

- `experience` → `/cv` via `CVExperience`, **and** the home page's `Erfaring` section via
  `Experience`, which shows `experience.slice(0, 3)`. Adding a new top entry therefore changes the
  front page too — mention that to the user.
- `education` → `/cv` via `CVEducation`.
- `volunteer` → `/cv` via `CVVolunteer`.

All three key their `.map()` on name + `period`, so a second stint at the same employer is safe.

## After updating

Mention to the user: there is no generated CV PDF. `public/assets/cv.pdf` does not exist and nothing
links to one, so nothing else goes stale — but if that file is ever added, it will not update itself
from `cv.ts`.
