// Color constants
export const COLORS = {
  PRIMARY: "black",
  SECONDARY: "#9ca3af", // Half-hour lines
  TEXT_SECONDARY: "#6b7280", // Date text
  DIVIDER: "#d1d5db", // Dividers, task lines
  BACKGROUND: "white",
} as const;

// Stroke width constants
export const STROKE_WIDTHS = {
  PRIMARY: "0.3", // Full hour lines, borders
  SECONDARY: "0.2", // Half-hour lines, dividers, task lines
} as const;

// Font constants
export const FONTS = {
  FAMILY: "Inter, sans-serif",
  SIZE_TIME_LABEL: "2.9",
  SIZE_DATE: "3.7",
  WEIGHT_MEDIUM: "500",
} as const;

// Dash pattern constants
export const DASH_PATTERNS = {
  DOTTED: "0.5,0.5", // Dense dotted pattern
} as const;

// Layout constants
export const LAYOUT = {
  ROW_HEIGHT: 5, // 5mm per row
  TASK_SPACING: 10, // 10mm between tasks
  CHECKBOX_SIZE: 3, // 3mm x 3mm
  TIME_COLUMN_WIDTH: 10, // Time column width in mm
  DATE_Y_POSITION: 12, // Date field Y position
  CONTENT_START_Y: 26, // Content area start Y position
  MARGIN_LEFT: 10, // Left margin in mm
} as const;

// Paper size constants
export const PAPER_SIZES = {
  A4: {
    width: "297mm",
    height: "210mm",
    viewBox: "0 0 297 210",
    dateX: 148.5,
    leftContentWidth: 128.5,
    rightContentX: 148.5,
    rightContentWidth: 128.5,
  },
  Letter: {
    width: "11in",
    height: "8.5in",
    viewBox: "0 0 279.4 215.9",
    dateX: 139.7,
    leftContentWidth: 129.7,
    rightContentX: 149.7,
    rightContentWidth: 129.7,
  },
} as const;
