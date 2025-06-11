import { HomeButton } from "./HomeButton.tsx";

interface LinkItem {
  content: string;
  href: string;
}

interface LinkProps {
  links: LinkItem[];
}

export function PortfolioLinks({ links }: LinkProps) {
  return (
    <div class="flex justify-center w-full gap-3">
      {links.map((link) => (
        <HomeButton
          href={link.href}
        >
          {link.content}
        </HomeButton>
      ))}
    </div>
  );
}
