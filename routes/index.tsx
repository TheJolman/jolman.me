import { HomeButton } from "../components/HomeButton.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Holman - CS Student & Math Tutor</title>
        <meta
          name="description"
          content="Computer Science student at CSU Fullerton specializing in software development. Offering private math tutoring for K-12 students."
        />
        <meta
          name="keywords"
          content="Josh Holman, Computer Science, Software Developer, Math Tutor, CSU Fullerton, Software Development"
        />
        <meta name="author" content="Josh Holman" />
        <meta
          property="og:title"
          content="Josh Holman - Computer Science Student & Math Tutor"
        />
        <meta
          property="og:description"
          content="Computer Science student at CSU Fullerton specializing in software development. Offering private math tutoring."
        />
        <meta property="og:url" content="https://jolman.me" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Josh Holman",
              "jobTitle": "Computer Science Student",
              "worksFor": {
                "@type": "Organization",
                "name": "California State University, Fullerton",
              },
              "email": "josh@jolman.me",
              "url": "https://jolman.me",
              "knowsAbout": [
                "Computer Science",
                "Software Development",
                "Mathematics",
                "Tutoring",
              ],
              "alumniOf": "California State University, Fullerton",
              "offers": {
                "@type": "Service",
                "name": "Math Tutoring",
                "description": "Private math tutoring for K-12 students",
              },
            }),
          }}
        />
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <div class="p-4 text-center">
          <h1 class="text-2xl font-bold text-black mb-4">
            Hello! I'm Josh Holman
          </h1>
          <p class="font-bold text-gray-700 mb-6">
            Computer Science Student & Software Developer
          </p>
        </div>

        <div class="w-full px-6 mb-6">
          <div class="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm text-center">
            <p class="text-gray-700">
              Welcome to my personal website. Explore my portfolio, learn about
              my background, or get in touch about tutoring services.
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
    </>
  );
}
