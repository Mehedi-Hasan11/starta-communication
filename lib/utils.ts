/**
 * Utility for combining Tailwind CSS class strings cleanly.
 */
export function cn(...inputs: (string | boolean | undefined | null)[]): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Format volume numbers into enterprise notation (e.g. 1000000 -> 1M+).
 */
export function formatVolume(num: number): string {
  if (num >= 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(1)}B+`;
  }
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(0)}M+`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(0)}K+`;
  }
  return num.toString();
}
