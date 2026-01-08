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
  MARGIN_TOP: 10, // Top margin in mm
  MARGIN_BOTTOM: 10, // Bottom margin in mm
  MARGIN_LEFT: 10, // Left margin in mm
  MARGIN_RIGHT: 10, // Right margin in mm
} as const;

// Paper size constants
// All dimensions stored in mm as source of truth
export const PAPER_SIZES = {
  A4: {
    widthMm: 297,
    heightMm: 210,
  },
  Letter: {
    widthMm: 279.4, // 11in = 279.4mm
    heightMm: 215.9, // 8.5in = 215.9mm
  },
} as const;

// Helper function to get width/height strings with units
export const getPaperDimensions = (format: keyof typeof PAPER_SIZES) => {
  const config = PAPER_SIZES[format];
  
  return {
    width: `${config.widthMm}mm`,
    height: `${config.heightMm}mm`,
    viewBox: `0 0 ${config.widthMm} ${config.heightMm}`,
  };
};
