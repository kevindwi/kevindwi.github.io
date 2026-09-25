import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

export default defineConfig({
  mdxOptions: {
    preset: 'fumadocs',
    remarkPlugins: [remarkMath],
    rehypePlugins: (plugins) => [rehypeKatex, ...plugins],
  },
});