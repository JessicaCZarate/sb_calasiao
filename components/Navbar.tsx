"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "@/app/lib/navigation";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const pathname = usePathname();

   const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const activeLinkStyles = "shadow bg-gray-300 rounded-md";

  return (
      <header className="sticky inset-x-0 top-0 z-[50]">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-2 sm:px-4 py-2.5 bg-gray-100 md:px-6 md:py-3 lg:px-7 lg:bg-white lg:bg-opacity-50 lg:backdrop-blur-[2px] shadow">
          <div className="flex lg:flex-1">
            <Link href="/" className="sm:gap-2 text-center inline-flex items-center hover:bg-gray-300 hover:rounded-md px-2.5 py-1.5">
              <span className="sr-only">Municipality of Calasiao</span>
              <Image
                alt="sb logo"
                src="/image/calasiao.png"
                className="h-6 sm:h-9 lg:h-10 w-auto ring-1 lg:ring-2 ring-green-900 rounded-full"
                width={100}
              height={100}
              priority
            />
            <p className="font-figsemibold text-slate-800 text-lg sm:text-2xl lg:text-3xl">SB.</p>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-800 hover:bg-gray-300">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-5 sm:size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-1 lg:shrink-0">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-md/6 text-slate-900 hover:shadow font-figregular tracking-wider hover:bg-gray-300 py-2.5 px-4 hover:rounded-md ${isActive(item.href) ? activeLinkStyles : ""}`}>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden">
          <div className="fixed inset-0 z-100" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:w-1/2 md:w-1/3 overflow-y-auto p-2 sm:p-4 bg-gray-50 shadow">
            <div className="flex items-center justify-between">
              <Link href="/" className="px-2.5 py-1.5 hover:bg-gray-300 rounded-md items-center">
                <span className="sr-only">Sangguniang Bayan Calasiao</span>
                <Image
                alt="sb logo"
                src="/image/calasiao.png"
                className="h-8 sm:h-9 lg:h-11 w-auto ring-1 lg:ring-2 ring-green-900 rounded-full"
                width={100}
              height={100}
              priority
            />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md text-gray-700 px-2.5 py-1.5 hover:bg-gray-300">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-5 sm:size-6" />
              </button>
            </div>
            <div className="flow-root">
              <div className="mt-4 divide-y divide-gray-500/10">
                <div>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`block rounded-lg px-3 py-4 font-figsemibold text-gray-900 text-sm sm:text-base hover:bg-gray-200 ${isActive(item.href) ? activeLinkStyles : ""}`}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  );
}
