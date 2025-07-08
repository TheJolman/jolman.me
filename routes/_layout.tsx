import { PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div class="layout">
      <Navbar />
      <Component />
    </div>
  );
}
