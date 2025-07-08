import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);

  // Redirect www to non-www
  if (url.hostname.startsWith("www.")) {
    const newUrl = new URL(req.url);
    newUrl.hostname = url.hostname.replace("www.", "");
    return Response.redirect(newUrl.toString(), 301);
  }

  return await ctx.next();
}

