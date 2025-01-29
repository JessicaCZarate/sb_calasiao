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
          className="flex items-center justify-between px-6 py-3 lg:px-8 bg-white bg-opacity-50 backdrop-blur-[2px] shadow">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex gap-2 text-center align-middle">
              <span className="sr-only">Municipality of Calasiao</span>
              <Image
                alt="sb logo"
                src="/image/calasiao.png"
                className="h-11 w-auto ring-2 ring-green-900 rounded-full"
                width={100}
              height={100}
              priority
            />
            <p className="font-figsemibold text-4xl pt-[3.5px]">SB.</p>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md px-2.5 py-3 text-slate-900">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6 " />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-md/6 text-slate-900 hover:shadow font-figregular tracking-wider hover:bg-gray-300 py-3 px-5 hover:rounded-md ${isActive(item.href) ? activeLinkStyles : ""}`}>
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
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Sangguniang Bayan Calasiao</span>
                <Image
                  alt="calasiao logo"
                  src="/image/calasiao.png"
                  className="h-8 w-auto ring-2 ring-green-900 rounded-full"
                  width={100}
                  height={100}
                  priority
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-4 text-base/7 font-figsemibold text-gray-900 hover:bg-gray-200">
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
