import { loader } from "fumadocs-core/source";
import { docs } from "collections/server";
import { docsContentRoute, docsRoute, blogRoute } from "./shared";

// Blog
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import { blogPosts } from "collections/server";

export const source = loader({
  source: docs.toFumadocsSource(),
  baseUrl: docsRoute,
});

export const blog = loader({
  baseUrl: blogRoute,
  source: toFumadocsSource(blogPosts, []),
});

export function getPageMarkdownUrl(page: (typeof source)["$inferPage"]) {
  const segments = [...page.slugs, "content.md"];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join("/")}`,
  };
}

export async function getLLMText(page: (typeof source)["$inferPage"]) {
  const processed = await page.data.getText("processed");

  return `# ${page.data.title} (${page.url})

${processed}`;
}
