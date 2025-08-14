import { Handlers } from "$fresh/server.ts";
import { walk } from "@std/fs/walk";

async function getRoutes(): Promise<string[]> {
  const pages = new Set<string>();

  for await (
    const entry of walk("./routes", {
      exts: [".tsx", ".ts"],
      includeDirs: false,
    })
  ) {
    const name = entry.name;
    const p = entry.path.replaceAll("\\", "/");

    if (p.includes("/api/")) continue; // not needed but here anyway
    if (entry.name.startsWith("_") || entry.name.startsWith("[")) continue;
    if (/(robots\.txt|sitemap\.xml)\.ts$/.test(name)) continue;

    let urlPath = p
      .replace(/^\.?\/?routes/, "")
      .replace(/\/index\.(tsx|ts)$/, "/")
      .replace(/\.(tsx|ts)$/, "");

    if (!urlPath.startsWith("/")) urlPath = "/" + urlPath;
    pages.add(urlPath);
  }
  return Array.from(pages).sort();
}

export const handler: Handlers = {
  async GET(req) {
    const origin = new URL(req.url).origin;
    const paths = await getRoutes();
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n")}
</urlset>`;

    return new Response(body, {
      headers: {
        "Content-Type": "application/xml; charset=UTF-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
};
