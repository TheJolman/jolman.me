export default function AboutPage() {
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <div class="p-4 text-center">
        <h1 class="text-2xl font-bold text-black mb-6">About Me</h1>
        <p class="font-bold mb-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div class="w-full px-6">
        <div class="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200 shadow-sm">
          <h2 class="text-xl font-bold text-black mb-4">Background</h2>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p class="text-gray-700">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 class="text-xl font-bold text-black mb-4">Interests</h2>
            <ul class="text-gray-700 space-y-2">
              <li>• Lorem ipsum dolor sit amet</li>
              <li>• Consectetur adipiscing elit</li>
              <li>• Sed do eiusmod tempor</li>
              <li>• Incididunt ut labore</li>
            </ul>
          </div>

          <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 class="text-xl font-bold text-black mb-4">Experience</h2>
            <p class="text-gray-700 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p class="text-sm text-gray-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
