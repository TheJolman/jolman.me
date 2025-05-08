export default function PortfolioPage() {
  return (
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
      <section class="intro">
        <p>
          Hi there. I am a Computer Science student at CSU, Fullerton (Aug 2023
          - Dec 2025 expected). I also work part-time as a math tutor.
        </p>
        <a href="https://www.github.com/TheJolman" class="profile-link">
          My GitHub.
        </a>
        <a
          href="https://www.linkedin.com/in/joshua-holman-685a39244/"
          class="profile-link"
        >
          My Linkedin.
        </a>
        <a
          href="https://github.com/TheJolman/resume/blob/main/resume.pdf"
          class="profile-link"
        >
          My Resume (PDF).
        </a>
      </section>

      <section class="">
        <h3 class="section-title">Relevant Coursework</h3>
        <ul class="class-list">
          <li>Artifical Intelligence</li>
          <li>Machine Learning</li>
          <li>Data Science</li>
          <li>Database Systems</li>
          <li>Operating Systems</li>
        </ul>
      </section>

      <section class="">
        <h3 class="section-title">My Technical Interests</h3>
        <ul class="interests-list">
          <li>Open Source Software Development</li>
          <li>Compilers</li>
          <li>Systems Programming</li>
          <li>Data Science and ML</li>
          <li>Mathematics</li>
        </ul>
      </section>

      <section class="skills">
        <h3 class="section-title">Technical Skills</h3>
        <ul class="skills-list">
          <li>Python, C/C++, Java, Go, Lua, bash, SQL, Matlab</li>
          <li>Django, FastAPI, Python DS/ML libraries</li>
          <li>Nix/NixOS, Linux, Docker</li>
          <li>GitHub Actions, Vim</li>
        </ul>
      </section>
    </div>
  );
}
