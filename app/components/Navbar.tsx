"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface NavbarProps {
  links: { href: string; label: string }[];
  logoHref?: string;
  children?: React.ReactNode;  // To accept custom components inside Navbar
}

export const Navbar: React.FC<NavbarProps> = ({ links, logoHref = "/", children }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto">
          {/* Logo */}
          <Link href={logoHref} className="duration-200 text-zinc-300 hover:text-zinc-100">
            {/* Logo can go here */}
          </Link>

          {/* Navbar Links */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-6 w-full sm:w-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="duration-200 text-zinc-400 hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Render children inside the Navbar */}
          {children && <div className="ml-4">{children}</div>}
        </div>
      </div>
    </header>
  );
};
