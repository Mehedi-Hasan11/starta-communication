import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#050b14]/80 backdrop-blur-xl border-b border-[#1e293b]/70">
      <Container>
        <div className="flex items-center justify-between h-[72px]">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00f0ff]/50 rounded-lg p-1"
            aria-label="Starta Communication Ltd. Home"
          >
            <div className="relative w-44 sm:w-48 h-10 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/brand/logo.svg"
                alt="Starta Communication Ltd."
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <Navbar />

          {/* Header Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              href="/#contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Enterprise RFQ
            </Button>

            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
