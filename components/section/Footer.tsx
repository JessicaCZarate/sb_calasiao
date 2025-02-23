import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Officials",
    href: "/officials",
  },
  {
    text: "Services",
    href: "/services",
  },
  {
    text: "About",
    href: "/about",
  },
];

const Footer = () => {
  return (
    <footer className="shadow bg-gray-100">
      <div className="w-full mx-auto gap-2 md:flex p-4 md:items-center md:justify-between">
        <span className="flex gap-2 justify-center items-center text-sm sm:text-center text-gray-400">
          <Image
            src="/image/calasiao.png"
            alt="Calasiao Logo"
            width={26}
            height={26}
            className="ring-1 md:ring-2 ring-green-900 rounded-full"
          />
          © 2025 Sangguninang Bayan ng Calasiao <br className="sm:hidden" />|
          All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center justify-center mt-5 text-sm font-figmedium text-gray-400 md:mt-0">
          {links.map((link) => (
            <Link href={link.href} key={link.text}>
              <li className="hover:underline me-4 md:me-6">{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
