import { HomeButton } from "../components/HomeButton.tsx";

export default function Home() {
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <div class="p-4">
        <h1 class="text-xl font-bold text-black">Hello! I'm Josh Holman.</h1>
      </div>

      <div class="flex flex-col w-40">
        <HomeButton href="/portfolio">Portfolio</HomeButton>
        <HomeButton href="/resume">Resume</HomeButton>
        <HomeButton href="/about">About</HomeButton>
        <HomeButton href="/tutoring">Tutoring</HomeButton>
      </div>
    </div>
  );
}
