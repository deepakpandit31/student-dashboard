"use client";

import { Home, BookOpen, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="hidden md:flex w-24 flex-col items-center border-r border-zinc-800 bg-zinc-950 py-6">
      <div className="mb-10 text-xl font-bold">
        SD
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="relative"
            >
              {active === item.name && (
                <motion.div
                  layoutId="sidebar-pill"
                  className="absolute inset-0 rounded-2xl bg-zinc-800"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              )}

              <div className="relative z-10 p-4">
                <Icon size={22} />
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}