import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, render } from "@deno/gfm";
import { Head } from "$fresh/runtime.ts";
import { HomeButton } from "../components/HomeButton.tsx";

export const handler: Handlers<string> = {
  async GET(_, ctx) {
    const resp = await fetch(
      "https://raw.githubusercontent.com/TheJolman/resume/refs/heads/main/resume.md",
    );
    if (!resp.ok) {
      return new Response("Could not find resume.", { status: 404 });
    }
    const markdown = await resp.text();
    const html = render(markdown);
    return ctx.render(html);
  },
};

// TODO: Maybe implement some caching here
export default function ResumePage({ data }: PageProps<string>) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <div className="mt-5 flex flex-col items-center">
        <HomeButton href="/resume.pdf">
          PDF Version
        </HomeButton>
        <main
          className="mx-5 my-3 markdown-body"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>
    </>
  );
}
