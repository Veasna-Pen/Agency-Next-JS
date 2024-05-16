"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
  ];

  return (
    <header
      className={`sticky inset-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-transparent dark:bg-gray-200 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div className="relative flex items-center">
          <Link href="/">
            <Image src="/next.svg" alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="flex-grow"></div>
        <div className="hidden items-center justify-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                "text-lg font-medium text-slate-700": link.href === currentPath,
                "text-lg font-medium text-slate-400": link.href !== currentPath,
                "hover:text-slate-700 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-md bg-gradient-to-br from-teal-400  to-teal-600 px-3 py-1.5 font-dm text-lg font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Contact Us
          </Link>
        </div>
        <div className="relative flex items-center justify-center md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="h-6 w-auto text-slate-900 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
        {/* <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="h-12 w-12 rounded-lg p-2 dark:hover:bg-gray-700"
          >
            {theme === "light" ? (
              <svg
                className="text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            ) : (
              <svg
                className="text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div> */}
      </nav>
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } bg-white dark:bg-gray-900 md:hidden`}
      >
        <ul className="flex flex-col items-center gap-6 p-4">
          {links.map((link) => (
            <li
              key={link.href}
              className="pt-1.5 font-dm text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              <Link href={link.href} onClick={toggleMobileMenu}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-1.5 font-dm text-sm font-medium text-slate-700 dark:text-slate-200">
            <Link href="/contact" onClick={toggleMobileMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
