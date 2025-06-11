import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, render } from "@deno/gfm"
import { Head } from "$fresh/runtime.ts";

export const handler: Handlers<string> = {
  async GET(_, ctx) {
    const resp = await fetch(
      "https://raw.githubusercontent.com/TheJolman/resume/refs/heads/main/resume.md"
    );
    if (!resp.ok) {
      return new Response("Could not find resume.", { status: 404 });
    }
    const markdown = await resp.text();
    const html = render(markdown);
    return ctx.render(html);
  }
}

export default function ResumePage({ data }: PageProps<string>) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main class="mx-5 my-5 markdown-body" dangerouslySetInnerHTML={{ __html: data }} />
    </>
  );
}

