import { Button } from "../components/Button.tsx";

export default function Home() {
  const buttonClasses =
    "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded";
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <div class="p-4">
        <h1 class="text-xl font-bold text-blue-600">Hello! I'm Josh Holman.</h1>
      </div>

      <div class="p-4">
        <a href="/portfolio" class={buttonClasses}>Portfolio</a>
      </div>

      <div class="p-4">
        <a href="/resume" class={buttonClasses}>Resume</a>
      </div>

      <div class="p-4">
        <a href="/tutoring" class={buttonClasses}>Tutoring</a>
      </div>
    </div>
  );
}
