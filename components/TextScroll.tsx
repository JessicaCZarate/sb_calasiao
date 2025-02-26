"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const newsItems = [
  { text: "Breaking: New policies introduced in Calasiao.", href: "/news/policies" },
  { text: "Event: Community gathering scheduled for March.", href: "/events/community-gathering" },
  { text: "Update: Mayor announces new development plans.", href: "/news/development-plans" },
  { text: "Notice: Road closures due to ongoing maintenance.", href: "/news/road-closures" },
];

const NewsTicker = () => {
  return (
    <div className="w-full bg-gray-900 text-white overflow-hidden flex items-center py-2">
      <span className="font-bold px-4 text-yellow-400">Latest News:</span>
      <motion.div
        className="flex space-x-8 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {newsItems.map((news, index) => (
          <Link key={index} href={news.href} className="hover:underline text-white">
            {news.text}
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsTicker;