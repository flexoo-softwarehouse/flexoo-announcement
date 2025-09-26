"use client";

import { useEffect } from "react";

export default function SecurityProtection() {
  useEffect(() => {
    // Disable right-click
    const handleRightClick = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I (Inspector)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
      }

      // Ctrl+U (View Source)
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
        return false;
      }

      // Ctrl+S (Save Page)
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
      }
    };

    // Disable drag and drop
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Detect DevTools
    const devtools = { open: false, orientation: null };
    const threshold = 160;

    const detectDevTools = () => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!devtools.open) {
          devtools.open = true;
          // Redirect or show warning when devtools detected
          document.body.innerHTML = `
            <div style="
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: #1e3a8a;
              color: white;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
              z-index: 9999;
            ">
              <h1 style="font-size: 2rem; margin-bottom: 1rem;">⚠️ Akses Dibatasi</h1>
              <p style="font-size: 1.2rem; text-align: center; max-width: 600px;">
                Demi keamanan, halaman ini tidak dapat diakses dengan developer tools.
              </p>
              <button onclick="window.location.reload()" style="
                margin-top: 2rem;
                padding: 0.75rem 2rem;
                background: #fbbf24;
                color: #000;
                border: none;
                border-radius: 0.5rem;
                font-weight: bold;
                cursor: pointer;
                font-size: 1rem;
              ">
                Muat Ulang Halaman
              </button>
            </div>
          `;
        }
      } else {
        devtools.open = false;
      }
    };

    // Clear console periodically
    const clearConsole = () => {
      try {
        console.clear();
      } catch (_e) {
        // Ignore errors
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleRightClick);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    // Detect devtools with interval
    const devToolsInterval = setInterval(detectDevTools, 500);

    // Clear console periodically
    const consoleInterval = setInterval(clearConsole, 1000);

    // Add some fake functions to confuse potential hackers
    (
      window as unknown as { hackData: () => void; getData: () => void }
    ).hackData = () => {
      // Fake function
    };
    (
      window as unknown as { hackData: () => void; getData: () => void }
    ).getData = () => {
      // Fake function
    };

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
      clearInterval(devToolsInterval);
      clearInterval(consoleInterval);
    };
  }, []);

  return null;
}
