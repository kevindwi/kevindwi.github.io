import type { Route } from "./+types/home";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Link } from "react-router";
import { baseOptions } from "@/lib/layout.shared";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="p-4 flex flex-col items-center justify-center text-center flex-1">
        <h1 className="text-xl font-bold mb-2">Fumadocs on React Router.</h1>
        <p className="text-fd-muted-foreground mb-4">
          The truly flexible docs framework on React.js.
        </p>

        <div className="flex gap-3">
          <Link
            className="inline-flex justify-center px-4 py-2.5 rounded-full font-medium tracking-tight transition-colors bg-brand text-brand-foreground hover:bg-brand-200 max-sm:text-sm"
            to="/docs"
          >
            Open Docs
          </Link>
          <Link
            className="inline-flex justify-center px-4 py-2.5 rounded-full font-medium tracking-tight transition-colors bg-brand text-brand-foreground hover:bg-brand-200 max-sm:text-sm"
            to="/blog"
          >
            Open Blog
          </Link>
        </div>
      </div>
    </HomeLayout>
  );
}
