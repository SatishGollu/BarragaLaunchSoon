/**
 * Logger utility for consistent logging across the application
 */
class Logger {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = import.meta.env.MODE === "development";
  }

  log(...args: any[]): void {
    if (this.isDevelopment) {
      console.log("[Barraga]", ...args);
    }
  }

  warn(...args: any[]): void {
    if (this.isDevelopment) {
      console.warn("[Barraga]", ...args);
    }
  }

  error(...args: any[]): void {
    console.error("[Barraga]", ...args);
    // TODO: Send to error tracking service (Sentry, etc.)
  }

  info(...args: any[]): void {
    if (this.isDevelopment) {
      console.info("[Barraga]", ...args);
    }
  }
}

export default new Logger();
