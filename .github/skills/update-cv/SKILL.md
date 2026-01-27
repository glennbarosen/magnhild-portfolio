---
name: update-cv
description: Update CV data files when user mentions new experiences. Trigger when input includes a NAME (title/role/degree), TIME RANGE (period), and optionally a description. Use for work experience, education, or volunteering updates.
---

# Update CV Skill

Update the [CV data file](../../../src/data/cv.ts) when the user mentions new experiences.

## Trigger Criteria

Invoke when user input contains any of the fields described in the [template](./TEMPLATE.md) for work experience, education, or volunteer experience.

## Workflow

1. Identify the category (experience, education, or volunteer) from context
2. Extract required fields from user input
3. Format period in Norwegian style (e.g., "jan. 2024 - jun. 2024")
4. Add new entry to the appropriate array in `src/data/cv.ts`
5. Place new entries at the top of arrays (most recent first) unless chronology dictates otherwise
6. Ask for confirmation before committing changes with THIS EXACT commit message "chore: update CV 💼" using the github cli.
7. Push changes to remote.

## Period Format

Use Norwegian month abbreviations:

- jan., feb., mar., apr., mai, jun., jul., aug., sep., okt., nov., des.
- Use "Nå" or "d.d." for ongoing/current
- Format: "start - end" (e.g., "aug. 2021 - jan. 2023")
