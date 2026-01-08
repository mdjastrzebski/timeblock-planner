import { useEffect } from "react";
import type { PageFormat } from "../types";

const STYLE_ID = "dynamic-page-size";

export const usePrint = (pageFormat: PageFormat) => {
  useEffect(() => {
    // Ensure style element exists on mount
    let styleElement = document.getElementById(STYLE_ID) as HTMLStyleElement;
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = STYLE_ID;
      document.head.appendChild(styleElement);
    }

    // Update page size when format changes
    const pageSize = pageFormat === "A4" ? "A4 landscape" : "Letter landscape";
    styleElement.textContent = `@page { size: ${pageSize}; margin: 0; }`;

    // Cleanup: remove style element on unmount
    return () => {
      const element = document.getElementById(STYLE_ID);
      if (element) {
        element.remove();
      }
    };
  }, [pageFormat]);

  const handlePrint = () => {
    try {
      window.print();
    } catch (error) {
      console.error("Failed to open print dialog:", error);
      // Could add user-facing error notification here if needed
    }
  };

  return handlePrint;
};
