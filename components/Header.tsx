"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();

  const isActive = (path: string): boolean => path === pathName;

  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 rounded-full bg-white/10">
        <Link
          className={`nav-item ${isActive("/") ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900" : ""}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`nav-item ${isActive("/projects") ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900" : ""}`}
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={`nav-item ${isActive("/about") ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900" : ""}`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`nav-item ${isActive("/contact") ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900" : ""}`}
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
