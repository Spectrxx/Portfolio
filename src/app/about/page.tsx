"use client";

import React from "react";
import { FaCode, FaGamepad } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function AboutPage() {
  return (
    <div className="container max-w-7xl mx-auto pb-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        Tentang Aku
      </motion.h1>
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg dark:text-[#dbdbdb]/75 text-[#404B50] max-w-3xl mx-auto text-center">
          I am a fresh graduate Frontend Developer and Game Developer who is
          enthusiastic about building interactive web interfaces using
          technologies such as React, Next.js, and Tailwind CSS, as well as
          developing games with Unity and C#. I enjoy learning new things, am
          accustomed to working from design to implementation, and am ready to
          contribute to challenging and innovative digital projects.
        </p>
      </motion.section>

      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-black border border-white/40 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
            transition={undefined}
          >
            <FaCode className="h-8 w-8 text-[#256AF9] dark:text-[#FECD34] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <ul className="dark:text-[#dbdbdb]/75 text-[#404B50] space-y-2">
              <li>React/Next.js</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>HTML5/CSS3</li>
              <li>Node.js</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-black border border-white/40 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
            transition={undefined}
          >
            <FaGamepad className="h-8 w-8 text-[#256AF9] dark:text-[#FECD34] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Game Development</h3>
            <ul className="dark:text-[#dbdbdb]/75 text-[#404B50] space-y-2">
              <li>Unity Engine</li>
              <li>C#</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="bg-white dark:bg-black border border-white/40 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              S1 Teknologi Informasi
            </h3>
            <p className="text-[#256AF9] dark:text-[#FECC34] mb-2">
              Universitas Amikom Yogyakarta • 2020-2024
            </p>
            <ul className="text-[#404B50] dark:text-[#dbdbdb]/75 space-y-1">
              <li className="grid grid-cols-[60px_10px_1fr] items-start gap-x-2">
                <span>IPK</span>
                <span className="text-center">•</span>
                <span>3.75</span>
              </li>
              <li className="grid grid-cols-[60px_10px_1fr] items-start gap-x-2">
                <span>Skripsi</span>
                <span className="text-center">•</span>
                <span>
                  Perancangan dan Pembuatan Game Bertema Wisata Yogyakarta “Bimo
                  Misadventures” dengan Metode Pengembangan Game Development
                  Life Cycle
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
