"use client";

import { motion } from "framer-motion";

import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
import CourseCard from "./CourseCard";

import { Course } from "@/lib/types/course";

interface Props {
  courses: Course[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function BentoGrid({
  courses,
}: Props) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
    >
      <HeroTile />

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}

      <ActivityTile />
    </motion.section>
  );
}