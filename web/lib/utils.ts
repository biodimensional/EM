/**
 * Convert any string to a URL-safe slug.
 * e.g. "CloudMR — Cloud-Native MRI" → "cloudmr-cloud-native-mri"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
