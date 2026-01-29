# Hero Name Scramble Animation Plan

## Problem Statement
The HERO section's name currently scrambles into random letters on click and shifts down slightly after the animation. The user wants to:
1. Prevent the name from shifting down after the animation.
2. Instead of random scrambling, scramble the name into one of three specific words: "KOMMUNIKASJON", "TEKST", or "INNHOLDSPRODUKJSON" (chosen at random).

## Workplan
- [ ] Remove the vertical shift (y: [0, -5, 0]) from the scramble animation to prevent the name from moving down.
- [ ] Update the scramble logic to replace the name with one of the three target words, split across the same number of lines as the original name (truncate or pad as needed).
- [ ] Ensure the animation still works smoothly and the name returns to normal after the timeout.
- [ ] Test the new behavior for both animation and scrambling.

## Notes
- The animation shift is controlled by the `y: [0, -5, 0]` property in the `motion.span` animate prop.
- The scramble logic is in the `scrambleName` callback in `Hero.tsx`.
- The three target words are longer/shorter than the original name, so line splitting logic will need to be defined (e.g., one word per line, or split across lines to fit the layout).
- If clarification is needed on how to split the words across lines, ask the user.
