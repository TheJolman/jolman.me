import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET() {
    return new Response(
      `User-agent: *\nDisallow:\n`,
      { headers: { "Content-Type": "text/plain" } },
    );
  },
};
