import { useSignal } from "@preact/signals";

export default function Navbar() {
  const activeLink = useSignal("/");
  return (
    <nav>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          activeLink.value = "/";
          window.history.pushState({}, "", "/");
        }}
        class={`p-2 ${activeLink.value === "/" ? "text-blue-500" : ""}`}
      >
        Home
      </a>
      <a
        href="/portfolio"
        onClick={(e) => {
          e.preventDefault();
          activeLink.value = "/portfolio";
          window.history.pushState({}, "", "/portfolio");
        }}
        class={`p-2 ${activeLink.value === "/portfolio" ? "text-blue-500" : ""}`}
      >
        Portfolio
      </a>
    </nav>
  );
}
