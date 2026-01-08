export type PageFormat = "A4" | "Letter";

// Type guard function for PageFormat
export function isPageFormat(value: string): value is PageFormat {
  return value === "A4" || value === "Letter";
}
