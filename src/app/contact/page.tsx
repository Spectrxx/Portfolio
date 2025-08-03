"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  fadeInDown,
} from "@/utils/animations";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccess("Failed to send message.");
    }
  };

  return (
    <div className="container max-w-7xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        Contact Me
      </motion.h1>
      <div className=" text-white px-4 py-12 md:flex gap-8 justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-semibold mb-4 text-black dark:text-white">
              My Contact
            </h2>
            <p className="mb-4 text-[#404B50] dark:text-[#dbdbdb]/75">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </motion.div>
          <motion.div
            className="space-y-8"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="w-6 h-6 text-[#256AF9] dark:text-[#FECE34]" />
              <div>
                <h3 className="font-semibold dark:text-white text-black">
                  Email
                </h3>
                <Link
                  href="mailto:fauziromi36@gmail.com"
                  className="text-[#404B50] dark:text-[#dbdbdb]/75 hover:text-[#256AF9] hover:dark:text-[#FECE34]"
                >
                  fauziromi36@gmail.com
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-4">
                <FaPhone className="w-6 h-6 text-[#256AF9] dark:text-[#FECE34]" />
                <div>
                  <h3 className="font-semibold dark:text-white text-black">
                    Phone
                  </h3>
                  <Link
                    href="tel:+6285333804611"
                    className="text-[#404B50] dark:text-[#dbdbdb]/75 hover:text-[#256AF9] hover:dark:text-[#FECE34]"
                  >
                    +62 853 3380 4611
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-4">
                <FaMapMarkedAlt className="w-6 h-6 text-[#256AF9] dark:text-[#FECE34]" />
                <div>
                  <h3 className="font-semibold dark:text-white text-black">
                    Location
                  </h3>
                  <p className="text-[#404B50] dark:text-[#dbdbdb]/75 hover:text-[#256AF9] hover:dark:text-[#FECE34]">
                    Yogyakarta, Indonesia
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:w-1/2 bg-white dark:bg-black border border-white/40 rounded-lg p-8 shadow-md"
          {...slideInRight}
        >
          <h3 className="font-semibold text-lg text-black dark:text-white">
            Name
          </h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="p-3 rounded bg-gray-200 dark:bg-[#181818] text-black dark:text-white"
          />
          <h3 className="font-semibold text-lg text-black dark:text-white">
            Email
          </h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-3 rounded bg-gray-200 dark:bg-[#181818] text-black dark:text-white"
          />
          <h3 className="font-semibold text-lg text-black dark:text-white">
            Message
          </h3>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            required
            className="p-3 rounded bg-gray-200 dark:bg-[#181818] text-black dark:text-white"
          ></textarea>
          <button
            type="submit"
            className="dark:bg-[#FFCF35] bg-[#256AF9] hover:bg-[#104be5] hover:dark:bg-[#fdbc12] dark:text-[#2F323A] py-2 rounded"
          >
            Send Message
          </button>
          {success && (
            <p
              className={`mt-2 ${
                success.includes("success") ? "text-green-500" : "text-red-500"
              }`}
            >
              {success}
            </p>
          )}
        </motion.form>
      </div>
    </div>
  );
}
