"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

const aboutLinks = [
  { href: "/about/story", label: "The Story" },
  { href: "/about/company", label: "The Company" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src="/brand/eli-logo-white-horizontal.svg"
            alt="Eli Bowman"
            width={120}
            height={40}
            className="h-4 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-zinc-300 transition-colors">
              About
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {aboutLinks.map((link) => (
                <DropdownMenuItem asChild key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/press"
            className="text-sm font-medium hover:text-zinc-300 transition-colors"
          >
            Press
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium hover:text-zinc-300 transition-colors"
          >
            Contact
          </Link>

          <Button asChild>
            <Link href="/book-a-call">Book a Call</Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {aboutLinks.map((link) => (
                <DropdownMenuItem asChild key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="/press" onClick={() => setMobileMenuOpen(false)}>
                  Press
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/book-a-call"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-semibold">Book a Call</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
