"use client";

import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import logo from "../../assets/logo-icon.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#doctors", label: "Doctors" },
  { href: "/#mission", label: "Our Mission" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-[#0A2540]/5 bg-gradient-to-r from-[#DCE9F9] via-[#E9F1FB] to-[#F3F7FD]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-14 sm:w-14">
            <img
              src={logo.src}
              alt="Bagerhat Eye Hospital Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-[13px] font-bold text-[#0A2540] sm:text-[15px]">
              Bagerhat Eye Hospital
            </div>
            <div className="truncate font-['Hind_Siliguri'] text-[11px] text-[#0A2540]/70 sm:text-xs">
              বাগেরহাট চক্ষু হাসপাতাল
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0A2540]/80 transition-colors hover:text-[#0B4F4C]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          onClick={() => {
            router.push("/appointment-details");
          }}
          className="hidden rounded-full bg-[#0B2A4A] px-5 text-sm font-semibold text-white hover:bg-[#0A2540] md:inline-flex"
        >
          Appointment Details
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#0A2540] transition-colors hover:bg-[#0A2540]/5 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[280px] bg-white sm:w-[320px]"
          >
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2.5 text-left">
                <img
                  src={logo.src}
                  alt="Bagerhat Eye Hospital Logo"
                  className="h-8 w-8 object-contain"
                />
                <span className="text-sm font-bold text-[#0A2540]">
                  Bagerhat Eye Hospital
                </span>
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#0A2540]/85 transition-colors hover:bg-[#0B4F4C]/5 hover:text-[#0B4F4C]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 p-4 border-t border-[#0A2540]/10 pt-6">
              <Button
                onClick={() => router.push("/appointment-details")}
                className="w-full gap-2 rounded-full bg-[#0B2A4A] text-sm font-semibold text-white hover:bg-[#0A2540]"
              >
                <Phone className="h-4 w-4" />
                Appointment Details
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
