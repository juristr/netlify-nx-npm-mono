import type { MetaFunction } from "@remix-run/node";
import { InfoCard } from "@myorg/ui-cards";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold mb-4">Welcome to Remix</h1>

      <InfoCard title="Quick Start Guide">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Edit{" "}
            <code className="bg-gray-100 p-1 rounded">
              app/routes/_index.tsx
            </code>{" "}
            and save to reload
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Remix Docs
            </a>
          </li>
        </ul>
      </InfoCard>
    </div>
  );
}
