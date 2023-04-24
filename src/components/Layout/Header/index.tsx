// components
import { Container } from "@/components/Container";
import Link from "next/link";

const navRoutes = [
  { name: "Home", src: "#" },
  { name: "Cars for Sale", src: "#" },
  { name: "Service & Repair", src: "#" },
  { name: "Research & Reviews", src: "#" },
  { name: "Sell Your Car", src: "#" },
];

export const Header = () => {
  return (
    <header>
      <div className="flex bg-purple-200 py-5 pb-5 pl-5 pr-5">
        <a href="#">Auto Room</a>

        <nav className="ml-auto">
          {navRoutes.map(({ name, src }, idx) => {
            return (
              <Link key={idx} href={src} className="mr-5 last:mr-0">
                {name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
