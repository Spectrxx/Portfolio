"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { allprojects } from "../contents/allprojects";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";

export default function ProjectsPage() {
  return (
    <div className="container max-w-7xl mx-auto pb-24">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>
      <motion.p
        className="text-lg dark:text-[#dbdbdb]/75 text-[#404B50] mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are some of my recent projects. Click on the links to view the code
        or live demo.
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {allprojects.map((project) => (
          <motion.article
            key={project.title}
            className="bg-white dark:bg-black border border-white/40 rounded-lg shadow-lg p-6"
            variants={fadeInUp}
            {...cardHoverSmall}
            transition={undefined}
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <motion.h3
              className="text-xl font-semibold mb-2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 bg-[#256AF9]/10 text-[#256AF9] dark:bg-[#FECC34]/10 dark:text-[#FECC34] rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            <div className="flex gap-4 mt-2 items-center">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-[#256AF9] dark:hover:text-[#FECC34] transition-colors"
              >
                <FaGithub className="w-5 h-5" /> <span>Code</span>
              </Link>
              <Link
                href={project.demoLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:text-[#256AF9] dark:hover:text-[#FECC34] transition-colors"
              >
                <FaExternalLinkAlt className="w-5 h-5" />{" "}
                <span>View Project</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}
