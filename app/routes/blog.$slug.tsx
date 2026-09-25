import { useMDXComponents } from "@/components/mdx";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { Link, redirect } from "react-router";
import type { Route } from "./+types/blog.$slug";
import { blog } from "@/lib/source";
import browserCollections from "collections/browser";

export async function loader({ params }: Route.LoaderArgs) {
  const page = blog.getPage([params.slug]);

  if (!page) throw redirect("/not-found");

  return {
    path: page.path,
    title: page.data.title,
    description: page.data.description,
    author: page.data.author,
    date: page.data.date,
  };
}

const clientLoader = browserCollections.blogPosts.createClientLoader({
  component({ toc, default: Mdx }) {
    return (
      <>
        <InlineTOC items={toc} />
        <Mdx components={useMDXComponents()} />
      </>
    );
  },
});

export function meta({ data }: { data?: Awaited<ReturnType<typeof loader>> }) {
  if (!data) return [{ title: "Not Found" }];
  return [
    { title: data.title },
    { name: "description", content: data.description },
  ];
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <div className="w-full max-w-[1400px] mx-auto px-4 py-12 rounded-xl border md:px-8">
        <h1 className="mb-2 text-3xl font-bold">{loaderData.title}</h1>
        <p className="mb-4 text-fd-muted-foreground">
          {loaderData.description}
        </p>
        <Link to="/blog" className="text-sm underline">
          ← Back to Blog
        </Link>
      </div>

      <article className="w-full max-w-[1400px] mx-auto flex flex-col px-4 py-8">
        <div className="prose min-w-0 dark:prose-invert">
          {clientLoader.useContent(loaderData.path)}
        </div>

        <div className="flex flex-col gap-4 text-sm mt-8 pt-4 border-t border-fd-border">
          <div>
            <p className="mb-1 text-fd-muted-foreground">Written by</p>
            <p className="font-medium">{loaderData.author}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-fd-muted-foreground">At</p>
            <p className="font-medium">
              {new Date(loaderData.date).toDateString()}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}