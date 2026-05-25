"use client";

import { motion } from "framer-motion";

const activityData = [
  1,0,1,1,0,1,0,
  0,1,1,0,1,1,0,
  1,1,0,1,0,1,1,
  0,1,1,0,1,0,1,
  1,0,1,1,0,1,0,
];

export default function ActivityTile() {
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
        delay: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h3 className="text-xl font-semibold">
        Activity
      </h3>

      <div className="mt-6 grid grid-cols-7 gap-2">
        {activityData.map((item, i) => (
          <div
            key={i}
            className={`h-5 rounded ${
              item
                ? "bg-zinc-600"
                : "bg-zinc-800"
            }`}
          />
        ))}
      </div>
    </motion.article>
  );
}