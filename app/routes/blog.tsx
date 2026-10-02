import { blog } from "@/lib/source";
import { Link } from "react-router";
import type { Route } from "./+types/blog";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { formatDate, toTimestamp } from "@/lib/shared";

export async function loader() {
  const posts = blog
    .getPages()
    .map((post) => ({
      url: post.url,
      title: post.data.title,
      description: post.data.description,
      date: post.data.date,
    }))
    .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date));

  return { posts };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog" },
    { name: "description", content: "Latest posts by Kevin Dwi Nayotama." },
  ];
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <HomeLayout {...baseOptions()}>
      <main className="mx-auto w-full max-w-page px-4 pb-12 md:py-12">
        <div className="relative dark mb-4 aspect-[3.2] p-8 z-2 md:p-12">
          <img
            alt="banner"
            width="1657"
            height="534"
            decoding="async"
            data-nimg="1"
            className="absolute inset-0 size-full -z-1 object-cover"
            srcSet="https://www.fumadocs.dev/_next/image?url=%2F_next%2Fstatic%2Fimmutable%2Fmedia%2Fbanner.0u4sv13gc-dyf.png&amp;w=1920&amp;q=75 1x, https://www.fumadocs.dev/_next/image?url=%2F_next%2Fstatic%2Fimmutable%2Fmedia%2Fbanner.0u4sv13gc-dyf.png&amp;w=3840&amp;q=75 2x"
            src="https://www.fumadocs.dev/_next/image?url=%2F_next%2Fstatic%2Fimmutable%2Fmedia%2Fbanner.0u4sv13gc-dyf.png&amp;w=3840&amp;q=75"
            style={{ color: "transparent" }}
          />
          <h1 className="mb-4 text-3xl text-landing-foreground font-mono font-medium">
            Fumadocs Blog
          </h1>
          <p className="text-sm font-mono text-landing-foreground-200">
            Latest announcements of Fumadocs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.url}
              to={post.url}
              className="flex flex-col bg-fd-card rounded-2xl border shadow-sm p-4 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <p className="font-medium">{post.title}</p>
              {post.description && (
                <p className="text-sm text-fd-muted-foreground">
                  {post.description}
                </p>
              )}
              <p className="mt-auto pt-4 text-xs text-brand">
                {formatDate(post.date)}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </HomeLayout>
  );
}
