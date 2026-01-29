# Implementation Plan: Remove Scramble, Button Shake, Hover, and Capitalize Titles

## Problem Statement
The user wants to:
1. Remove the scramble text effect from the HERO section (no more name scrambling on click).
2. Remove the shake/scale animation from all buttons (no scaling on hover/tap).
3. Remove the hover effect (background color change) from the "Se full CV" button.
4. Make all section/page titles capitalized (not uppercase).

## Workplan
- [ ] Remove all scramble logic and state from `Hero.tsx` and render the name statically.
- [ ] Remove all Framer Motion `whileHover`/`whileTap`/motion wrappers from the `Button` component and any direct button usages.
- [ ] Remove the `hover:bg-primary/90` class from the "Se full CV" button in `Experience.tsx`.
- [ ] Change all section/page title classNames from `uppercase` to `capitalize` (Header, Experience, CVExperience, CVEducation, CVVolunteer, etc).
- [ ] Test to ensure all effects are removed and titles are capitalized.

## Notes
- The "Se full CV" button is a `Link` in `Experience.tsx`.
- Title casing may require updating both classNames and possibly the text content if it is hardcoded uppercase.
- If any titles are dynamically generated, ensure they are capitalized via CSS or JS.
