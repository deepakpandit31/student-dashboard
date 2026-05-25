"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

import { Course } from "../../lib/types/course";

interface Props {
  course: Course;
}

export default function CourseCard({
  course,
}: Props) {
  const Icon = Icons[
    course.icon_name as keyof typeof Icons
  ] as React.ElementType;

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
        scale: 1.02,
        y: -3,
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-[0_0_30px_rgba(255,255,255,0.03)]"
    >
      <div className="absolute inset-0 bg-linear-to-br from-zinc-800/20 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="rounded-2xl bg-zinc-800 p-3">
            {Icon && <Icon size={24} />}
          </div>

          <span className="text-sm text-zinc-400">
            {course.progress}%
          </span>
        </div>

        <h3 className="mt-6 text-xl font-semibold">
          {course.title}
        </h3>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${course.progress}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full bg-white"
          />
        </div>
      </div>
    </motion.article>
  );
}