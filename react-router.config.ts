import type { Config } from '@react-router/dev/config';
import { glob } from 'node:fs/promises';
import { createGetUrl, getSlugs } from 'fumadocs-core/source';
import { getPageImagePath } from './app/lib/og';

const getUrl = createGetUrl('/docs');

export default {
  ssr: false,
  async prerender({ getStaticPaths }) {
    const paths: string[] = [];
    const excluded: string[] = ['/api/search'];

    for (const path of getStaticPaths()) {
      if (!excluded.includes(path)) paths.push(path);
    }

    for await (const entry of glob('**/*.mdx', { cwd: 'content/docs' })) {
      const slugs = getSlugs(entry);
      paths.push(getUrl(slugs));
      paths.push(getPageImagePath(slugs));
    }

    for await (const entry of glob('**/*.mdx', { cwd: 'content/blog' })) {
      const slugs = getSlugs(entry);
      paths.push(`/blog/${slugs.join('/')}`);
    }

    return paths;
  },
} satisfies Config;
