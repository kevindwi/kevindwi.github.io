import { useMDXComponents } from "@/components/mdx";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import type { Route } from "./+types/blog.$slug";
import { blog } from "@/lib/source";
import browserCollections from "collections/browser";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export async function loader({ params }: Route.LoaderArgs) {
  const page = blog.getPage([params.slug]);

  if (!page) throw new Response("Not found", { status: 404 });

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

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: "Not Found" }];

  return [
    { title: loaderData.title },
    ...(loaderData.description
      ? [{ name: "description" as const, content: loaderData.description }]
      : []),
  ];
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <HomeLayout {...baseOptions()}>
        <article className="flex flex-col mx-auto w-full max-w-200 px-4 py-8">
          <div className="flex flex-row gap-4 text-sm mb-8">
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
          <h1 className="text-3xl font-semibold mb-4">{loaderData.title}</h1>
          <p className="text-fd-muted-foreground mb-8">
            {loaderData.description}
          </p>
          <div className="prose min-w-0 flex-1">
            {clientLoader.useContent(loaderData.path)}
          </div>
        </article>
      </HomeLayout>
    </>
  );
}
