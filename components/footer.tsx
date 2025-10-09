import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-600 text-xs sm:text-sm text-center md:text-left mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Bowmedia by Eli Bowman. All rights reserved.
        </div>
        <div className="flex gap-4 sm:gap-5">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-zinc-600 hover:text-white transition-colors">
            <Facebook className="size-5" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="text-zinc-600 hover:text-white transition-colors">
            <Twitter className="size-5" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="text-zinc-600 hover:text-white transition-colors">
            <Instagram className="size-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-zinc-600 hover:text-white transition-colors">
            <Linkedin className="size-5" />
          </Link>
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube" className="text-zinc-600 hover:text-white transition-colors">
            <Youtube className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
