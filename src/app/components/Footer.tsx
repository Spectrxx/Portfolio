import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200/40">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold text-[#256AF9] dark:text-[#FECC34]"
            >
              Portfolio.
            </Link>
            <p className="text-sm text-secondary mt-2">
              {new Date().getFullYear()} Spectrx. All rights reserved
            </p>
          </div>
          <div className="flex flex-row">
            <Link
              href=""
              className="text-2xl text-gray-600 hover:dark:text-[#FECC34] hover:text-[#256AF9] dark:text-gray-300 transition-colors p-2"
            >
              <FaGithub />
            </Link>
            <Link
              href=""
              className="text-2xl text-gray-600 hover:dark:text-[#FECC34] hover:text-[#256AF9] dark:text-gray-300 transition-colors p-2"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
