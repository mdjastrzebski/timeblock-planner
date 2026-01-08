# Timeblock Planner Print

## Project Overview

This is a React application built with TypeScript and Vite, designed to generate a printable timeblock planner. The application allows users to customize the planner's configuration (start/end hours, page format) and print it directly from the browser.

### Key Features

- **Customizable Time Range:** Users can set the starting and ending hours for the daily planner.
- **Page Formats:** Supports A4 and Letter page sizes with dynamic print styling.
- **Print Optimization:** Uses Tailwind CSS with `print:` variant and browser-specific `@page` rules to ensure the layout is perfect for physical printing, hiding UI controls during the process.

## Architecture

- **Entry Point:** `src/main.tsx` renders the `App` component.
- **State Management:** `src/App.tsx` manages the application state (hours, page format) and handles the print trigger.
- **Components:**
  - `src/components/Page.tsx`: The main layout container for the printable content.
  - `src/components/TimeblockPlanner.tsx`: Renders the time grid/table based on the selected hours.
  - `src/components/TaskList.tsx`: (Inferred) Renders the task list section of the planner.
- **Styling:**
  - Uses Tailwind CSS for all component styling with utility classes.
  - `src/styles/print.css`: Contains only browser-specific `@page` rules (cannot be converted to Tailwind).
  - `src/index.css`: Contains Tailwind directives and custom base styles.
  - Print-specific styles use Tailwind's `print:` variant prefix.

## Building and Running

The project is optimized for use with `bun`.

### Prerequisites

- Bun installed on your machine.

### Commands

| Command           | Description                                                            |
| :---------------- | :--------------------------------------------------------------------- |
| `bun dev`         | Starts the development server with HMR.                                |
| `bun run build`   | Type-checks (`tsc`) and builds the production-ready assets using Vite. |
| `bun run preview` | Previews the built production build locally.                           |
| `bun run lint`    | Runs ESLint to check for code quality issues.                          |

## Development Conventions

- **Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS.
- **Styling:** Tailwind CSS utility classes are used throughout components. Print styles use Tailwind's `print:` variant. Custom CSS is kept minimal (only for `@page` rules and base styles).
- **Type Safety:** Strict TypeScript configuration is enabled.
- **Print Logic:** The application relies heavily on browser native printing. Logic for `@page` size is dynamically injected in `App.tsx` to support multiple formats.
