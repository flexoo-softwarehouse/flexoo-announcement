// Simple encryption utility untuk melindungi data
export class DataProtection {
  private static readonly key = "FlexooSecurity2025";

  // Simple Caesar cipher untuk obfuskasi
  static encode(text: string): string {
    return btoa(
      text
        .split("")
        .map((char, i) =>
          String.fromCharCode(
            char.charCodeAt(0) +
              (this.key.charCodeAt(i % this.key.length) % 10),
          ),
        )
        .join(""),
    );
  }

  static decode(encodedText: string): string {
    try {
      return atob(encodedText)
        .split("")
        .map((char, i) =>
          String.fromCharCode(
            char.charCodeAt(0) -
              (this.key.charCodeAt(i % this.key.length) % 10),
          ),
        )
        .join("");
    } catch {
      return "";
    }
  }

  // Hash function untuk NRP (one-way)
  static hashNRP(nrp: string): string {
    let hash = 0;
    const secret = "FlexooHash2025";
    const combined = nrp + secret;

    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }

    return Math.abs(hash).toString(16);
  }

  // Validate hash
  static validateHash(nrp: string, hash: string): boolean {
    return this.hashNRP(nrp) === hash;
  }
}
