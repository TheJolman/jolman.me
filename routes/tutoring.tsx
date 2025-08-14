import { Head } from "$fresh/runtime.ts";

export default function TutoringPage() {
  return (
    <>
      <Head>
        <title>
          Math Tutoring - Josh Holman | K-12 Mathematics Instruction
        </title>
        <meta
          name="description"
          content="Professional math tutoring services by Josh Holman. Experienced instructor offering personalized K-12 mathematics tutoring including algebra, geometry, pre-calculus, and calculus."
        />
        <meta
          name="keywords"
          content="Math Tutoring, Mathematics Tutor, K-12 Math, Algebra Tutor, Geometry Tutor, Calculus Tutor, Josh Holman Tutor"
        />
        <meta property="og:title" content="Math Tutoring - Josh Holman" />
        <meta
          property="og:description"
          content="Professional math tutoring services for K-12 students. Experienced instructor with personalized approach."
        />
        <meta property="og:url" content="https://jolman.me/tutoring" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Math Tutoring Services",
              "description": "Professional math tutoring for K-12 students",
              "provider": {
                "@type": "Person",
                "name": "Josh Holman",
                "email": "tutoring@jolman.me",
              },
              "serviceType": "Educational Services",
              "areaServed": "K-12 Mathematics",
              "offers": {
                "@type": "Offer",
                "price": "25",
                "priceCurrency": "USD",
                "description":
                  "$25 for sessions up to 1 hour, $25/hour for extended sessions",
              },
            }),
          }}
        />
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <div class="p-4 text-center">
          <h1 class="text-2xl font-bold text-black mb-6">Math Tutoring</h1>
          <p class="font-bold mb-6 text-gray-700">
            I offer private math tutoring with flexible scheduling and
            personalized instruction.
          </p>
        </div>

        <div class="w-full px-6">
          <div class="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
            <h2 class="text-xl font-bold text-black mb-4">
              Contact & Availability
            </h2>
            <p class="text-gray-700 mb-2">
              For availability and scheduling, please reach out to me at:
            </p>
            <a
              href="mailto:josh@jolman.me"
              class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded inline-block"
            >
              tutoring@jolman.me
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h2 class="text-xl font-bold text-black mb-4">Rates</h2>
              <p class="text-gray-700">
                <span class="font-semibold">$25</span> for sessions up to 1 hour
              </p>
              <p class="text-gray-700">
                <span class="font-semibold">$25/hour</span>{" "}
                for extended sessions
              </p>
            </div>

            <div class="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h2 class="text-xl font-bold text-black mb-4">Topics Offered</h2>
              <p class="text-gray-700 mb-3">
                All K-12 mathematics topics including:
              </p>
              <ul class="text-gray-600 text-sm space-y-1">
                <li>• Algebra & Geometry</li>
                <li>• Trigonometry</li>
                <li>• Pre-Calculus & Calculus</li>
                <li>• Test Preparation</li>
              </ul>
              <p class="text-sm text-gray-500 mt-3 italic">
                Advanced topics require advance notice for preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
