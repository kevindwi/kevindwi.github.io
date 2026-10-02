import type { Config } from '@react-router/dev/config';
import { glob } from 'node:fs/promises';
import { createGetUrl, getSlugs } from 'fumadocs-core/source';
import { getPageImagePath } from './app/lib/og';

const getUrl = createGetUrl('/docs');

export default {
  ssr: true,
  async prerender({ getStaticPaths }) {
    const paths: string[] = [...getStaticPaths()];
    const excluded: string[] = ['/api/search'];

    const baseRoutes = ['/', '/blog', '/docs'];
    for (const route of baseRoutes) {
      if (!paths.includes(route)) paths.push(route);
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

    return paths.filter((path) => !excluded.includes(path));
  },
} satisfies Config;
