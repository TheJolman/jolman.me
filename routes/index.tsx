import { HomeButton } from "../components/HomeButton.tsx";

export default function Home() {
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <div class="p-4 text-center">
        <h1 class="text-2xl font-bold text-black mb-4">Hello! I'm Josh Holman</h1>
        <p class="font-bold text-gray-700 mb-6">
          Computer Science Student & Software Developer
        </p>
      </div>

      <div class="w-full px-6 mb-6">
        <div class="bg-white rounded-lg p-6 border border-gray-200 shadow-sm text-center">
          <p class="text-gray-700">
            Welcome to my personal website. Explore my portfolio, learn about my background, 
            or get in touch about tutoring services.
          </p>
        </div>
      </div>

      <div class="flex flex-col w-48">
        <HomeButton href="/portfolio">Portfolio</HomeButton>
        <HomeButton href="/resume">Resume</HomeButton>
        <HomeButton href="/about">About</HomeButton>
        <HomeButton href="/tutoring">Tutoring</HomeButton>
      </div>
    </div>
  );
}
