"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  const today = new Date();

  const hour = today.getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.01,
      }}
      className="relative col-span-1 overflow-hidden rounded-3xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-black p-8 md:col-span-2"
    >
      <div className="absolute -top-20 right-0 h-60 w-60 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10">
        <p className="text-zinc-400">
          {greeting} 👋
        </p>

        <h1 className="mt-3 text-4xl font-bold leading-tight">
          Welcome back,
          <br />
          Deepak
        </h1>

        <div className="mt-8 flex items-center gap-3">
          <div className="rounded-2xl bg-zinc-800 px-4 py-2">
            🔥 12 Day Streak
          </div>

          <div className="rounded-2xl bg-zinc-800 px-4 py-2">
            4 Courses
          </div>
        </div>

        <p className="mt-6 max-w-md text-zinc-500">
          Continue learning and improve your
          daily progress.
        </p>
      </div>
    </motion.article>
  );
}