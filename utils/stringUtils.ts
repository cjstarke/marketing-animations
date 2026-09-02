/**
 * Converts a string to kebab-case format
 * Example: "Performance Terms" → "performance-terms"
 * @param str - The string to convert
 * @returns The kebab-cased string
 */
export function toKebabCase(str: string): string {
  if (!str) return '';

  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-')       // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '')   // Remove leading/trailing hyphens
    .trim();
}
