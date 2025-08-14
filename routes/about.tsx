import { Head } from "$fresh/runtime.ts";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>
          About Me - Josh Holman
        </title>
        <meta
          name="description"
          content="Learn about Josh Holman - Computer Science student at CSU Fullerton, Linux enthusiast, and experienced math tutor with a passion for software development."
        />
        <meta
          name="keywords"
          content="Josh Holman About, Computer Science Student, Math Tutor, CSU Fullerton, Linux Enthusiast, Software Development"
        />
        <meta property="og:title" content="About Me - Josh Holman" />
        <meta
          property="og:description"
          content="Computer Science student at CSU Fullerton with a passion for software development and math tutoring."
        />
        <meta property="og:url" content="https://jolman.me/about" />
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <div class="p-4 text-center">
          <h1 class="text-2xl font-bold text-black mb-6">About Me</h1>
          <p class="font-bold mb-6 text-gray-700">
            I'm a math tutor and fourth year CS student at CSU, Fullerton.
          </p>
        </div>

        <div class="w-full px-6">
          <div class="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200 shadow-sm">
            <h2 class="text-xl font-bold text-black mb-4">Background</h2>
            <p class="text-gray-700 mb-4">
              I first attended college at El Camino Community College in
              Torrance, CA. There I played collegiate tennis and earned two
              associate degrees: Mathematics and General Studies w/ emphpasis in
              Physical Sciences. After five semesters I had fully transferred to
              CSU, Fullerton where I am now, in my final semester. My degree
              will be in CS with a minor in Math. I am a board member of my
              schools ACM chapter where I co-lead one of our open-source
              projects.
            </p>
            <p class="text-gray-700 mb-4">
              I'm a huge Linux enthusiast (take a look at my{"  "}
              <a
                class="text-blue-500"
                href="https://github.com/thejolman/.dotfiles"
              >
                rice
              </a>) and generally into tech. I enjoy self-hosting things on my
              home server, writing code, and optiimizing my workflow. While I
              can't call myself an engineer, I enjoy tinkering with physical
              hardware, and fixing/upgrading devices when I can.
            </p>

            <p class="text-gray-700 mb-4">
              Besides school and software, I'm interested in literature and
              music, as well as various sports. Some of my favorite authors are
              George R. R. Martin, Vladimir Nabokov, and Sylvia Plath. I've
              played tennis competetively up until recently, and I also enjoy
              golf and snowboarding (although my wallet doesn't).
            </p>

            <p class="text-gray-700">
              Finally, I've been working as an instructor at various Mathnasium
              locations for nearly two years at this point, and I do private
              tutoring as well when the opportunity presents itself.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 class="text-xl font-bold text-black mb-4">Interests</h2>
              <ul class="text-gray-700 space-y-2">
                <li>• Programming of all kinds</li>
                <li>• System administration and devops tasks</li>
                <li>• Math!</li>
                <li>• Literature and Music</li>
                <li>• Fitness</li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 class="text-xl font-bold text-black mb-4">Experience</h2>
              <p class="text-gray-700 mb-3">
                I've worked a few different, unrelated jobs. First as a hospital
                warehouse worker, then (I occassionally still do) as a tennis
                instructor, and now as a math instructor. The last two positions
                have largely been jobs where I work with kids, which I enjoy.
              </p>
              <p class="text-sm text-gray-600">
                See my{" "}
                <a
                  class="text-blue-500"
                  href="https://www.linkedin.com/in/joshua-holman-685a39244/"
                >
                  linkedin
                </a>{" "}
                more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
