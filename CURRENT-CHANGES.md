Add pomodoro tracking circles to task list rows.

- Each task row shows 5 empty grey circles, right-aligned and vertically centered like the checkbox.
- Count and gap configurable via `LAYOUT.POMODORO_COUNT` / `LAYOUT.POMODORO_GAP`.
- Fix extra printed page on physical printers: page SVG now sized to the print page box (`100vw`/`100vh`) instead of a fixed 210mm, and print forces white background, light color-scheme and no SVG shadow (dark mode artifacts).
