import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET() {
    const resp = await fetch(
      "https://github.com/TheJolman/resume/raw/main/resume.pdf",
    );

    if (!resp.ok) {
      return new Response("Could not find resume PDF.", { status: 404 });
    }

    // TODO: over-engineer this so file is cached and only downloaded if it has a newer commit
    const pdfBuffer = await resp.arrayBuffer();

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=resume.pdf",
      },
    });
  },
};

