export const appName = "kevin's";
export const docsRoute = "/docs";
export const blogRoute = "/blog";
export const docsImageRoute = "/og/docs";
export const docsContentRoute = "/llms.mdx/docs";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "kevindwi",
  repo: "kevindwi.github.io",
  branch: "main",
};

/**
 * Frontmatter dates are plain `YYYY-MM-DD` strings, which `Date` parses as
 * UTC midnight. Formatting them in the viewer's local timezone would shift the
 * day backwards for anyone west of UTC, so always format in UTC with a fixed
 * locale — this also keeps SSR and hydration output identical.
 */
export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(typeof date === "string" ? new Date(date) : date);
}

/** Sort key for posts, newest first. */
export function toTimestamp(date: string | Date) {
  return (typeof date === "string" ? new Date(date) : date).getTime();
}
