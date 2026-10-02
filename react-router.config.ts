import type { Config } from '@react-router/dev/config';
import { glob } from 'node:fs/promises';
import { createGetUrl, getSlugs } from 'fumadocs-core/source';
import { getPageImagePath } from './app/lib/og';
import { docsContentRoute } from './app/lib/shared';

const getUrl = createGetUrl('/docs');

export default {
  ssr: true,

  // GitHub Pages has no server, so React Router's "Lazy Route Discovery"
  // endpoint (`/__manifest`) will always 404 and break every client-side
  // navigation. Ship the full route manifest in the initial HTML instead.
  routeDiscovery: {
    mode: "initial",
  },

  async prerender({ getStaticPaths }) {
    const paths: string[] = [...getStaticPaths()];

    const baseRoutes = ['/', '/blog', '/docs', '/api/search'];
    for (const route of baseRoutes) {
      if (!paths.includes(route)) paths.push(route);
    }

    for await (const entry of glob('**/*.mdx', { cwd: 'content/docs' })) {
      const slugs = getSlugs(entry);
      paths.push(getUrl(slugs));
      paths.push(getPageImagePath(slugs));
      paths.push(`${docsContentRoute}/${[...slugs, 'content.md'].join('/')}`);
    }

    for await (const entry of glob('**/*.mdx', { cwd: 'content/blog' })) {
      const slugs = getSlugs(entry);
      paths.push(`/blog/${slugs.join('/')}`);
    }

    return paths;
  },
} satisfies Config;
