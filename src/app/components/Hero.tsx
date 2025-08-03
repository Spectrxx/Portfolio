"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animations";

const Hero = () => {
  return (
    <section className="py-0 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="flex flex-col items-center mb-4"
          {...scaleIn}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/profiles.png"
            alt="profile image"
            width={200}
            height={100}
            className="rounded-full mb-4 h-50 object-cover ring-2 ring-[#256AF9] dark:ring-[#FECE34]"
          />
        </motion.div>
        <div>
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 text-[#000000] dark:text-[#ffffff]"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Hello, I&apos;m
          </motion.h1>
          <TypeAnimation
            className="text-[#256AF9] dark:text-[#FECE34]"
            sequence={["Muhammad Romi Nur Fauzi", 1000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "36px",
              display: "inline-block",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
          <motion.p
            className="text-lg md:text-xl dark:text-gray-300 text-gray-600 mb-6"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer | Game Developer
          </motion.p>
          <motion.div
            className="flex justify-center spac-x-4 mb-4"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/Spectrxx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:dark:text-[#FECC34] hover:text-[#256AF9] dark:text-gray-300 transition-colors p-2"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-romi-nur-fauzi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:dark:text-[#FECC34] hover:text-[#256AF9] dark:text-gray-300 transition-colors p-2"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="dark:bg-[#FFCD34] bg-[#256AF9] inline-block w-45 md:w-45 dark:text-[#3D484E] text-white px-8 py-3 rounded-lg hover:bg-[#104be5] hover:dark:bg-[#fdbc12] transition-colors"
              >
                Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/CV_MuhammadRomiNurFauzi.pdf"
                download
                className="bg-[#2E3139] inline-block w-45 md:w-45 text-white px-8 py-3 rounded-lg hover:bg-[#256AF9] hover:dark:bg-[#FECE34] hover:dark:text-[#2E3139] transition-colors"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
