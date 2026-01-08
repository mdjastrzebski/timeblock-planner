# Timeblock Planner Print

A minimalist, customizable daily timeblock planner designed specifically for physical printing. Built with React, TypeScript, and Vite.

## 🚀 Features

- **Customizable Time Range:** Set your day's start and end hours (e.g., 7:00 AM to 8:00 PM).
- **Format Support:** Supports both **A4** and **US Letter** paper sizes in landscape orientation.
- **Print Optimized:** Uses dedicated print CSS to ensure the layout is pixel-perfect on paper, automatically hiding UI controls during printing.
- **Clean Design:** Minimalist aesthetic focused on functionality and clarity.
- **Privacy First:** Runs entirely in your browser; no data is sent to any server.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Package Manager:** [Bun](https://bun.sh/) (compatible with npm/yarn/pnpm)

## 📦 Getting Started

### Prerequisites

- Node.js or Bun installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/timeblock-planner-print.git
   cd timeblock-planner-print
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📖 Usage

1. **Configure:** Use the controls at the top of the page to set your desired start hour, end hour, and page format (A4 or Letter).
2. **Preview:** The planner preview updates instantly as you change settings.
3. **Print:** Click the "Print Planner" button. This will trigger the browser's native print dialog.
4. **Settings:** Ensure "Background Graphics" is enabled in your print settings if lines or colors are missing.

## 🏗️ Development

- `bun dev`: Start development server.
- `bun run build`: Build for production.
- `bun run lint`: Run ESLint.
- `bun run preview`: Preview the production build.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).