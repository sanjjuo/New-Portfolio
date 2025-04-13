"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/Data/data";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex items-center gap-3 text-white text-lg font-medium tracking-widest uppercase">
        <MenuIcon className="w-7 h-7 cursor-pointer text-white" />
        Menu
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle hidden />
        </SheetHeader>

        <div className="flex items-center justify-center h-[100vh]">
          <ul className="space-y-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "text-xl font-semibold capitalize",
                    pathname === link.href
                      ? "text-appColor-primary underline"
                      : "text-appColor-secondary"
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SideBar;
