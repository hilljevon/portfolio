"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

// ---- Assets ----
const kp_logo = "/kp_logo.png";
const case_learn_snippet = "/case_learn_snippet.png";
const tx_snippet = "/tx_tool_snippet.png";
const data_db_snippet = "/data_db_snip.png";
const reno_snip = "/reno-dash-snip.png"
const posts = [
  {
    id: 0,
    title: "Clinical Analytics and Insights Platform",
    href: "/analytic-platform",
    description:
      "Developed a full-stack clinical analytics web platform (Next.js, Python, PostgreSQL, Spring Boot) as a modern replacement for Power BI/SAS, featuring dynamic charting, real-time filters, and multi-dimensional case analysis for leadership insights.",
    imageUrl: reno_snip,
    date: "Oct 28, 2025",
    datetime: "2025-10-28",
    category: { title: "Analytics", href: "#" },
    author: {
      name: "Jevon Hill",
      role: "Software Data Engineer",
      href: "#",
      imageUrl: kp_logo,
    },
  },

  {
    id: 1,
    title: "Case Management Automation and Triage Pipeline API",
    href: "/case-priority-app",
    description:
      "Built a TensorFlow machine learning pipeline to predict and prioritize inpatient cases using historical medical data. Deployed a Railway-hosted API backend integrated with a React front-end and data-analysis workflows.",
    imageUrl: case_learn_snippet,
    date: "July 1, 2025",
    datetime: "2025-07-01",
    category: { title: "Machine Learning", href: "#" },
    author: {
      name: "Jevon Hill",
      role: "Software Data Engineer",
      href: "#",
      imageUrl: kp_logo,
    },
  },
  {
    id: 2,
    title: "Repatriation Automation Dashboard",
    href: "/transfer-automation-app",
    description:
      "Built a Next.js application that automates clinical transfer workflows by streamlining summaries, forms, and intake processes, saving 1–2 hours daily through ExcelJS parsing, dynamic data population, and centralized resource directories.",
    imageUrl: tx_snippet,
    date: "Jan 30, 2023",
    datetime: "2023-01-30",
    category: { title: "Automation", href: "#" },
    author: {
      name: "Jevon Hill",
      role: "Software Data Engineer",
      href: "#",
      imageUrl: kp_logo,
    },
  },
  {
    id: 3,
    title: "Dynamic Data Analytics Interface",
    href: "/data-dashboard-app",
    description:
      "Developed a Next.js data dashboard with pandas and RechartsJS that analyzes phone performance and attendance metrics using reusable object-oriented data processing and dynamic interactive visualizations.",
    imageUrl: data_db_snippet,
    date: "Jan 12, 2025",
    datetime: "2025-01-12",
    category: { title: "Data Analysis", href: "#" },
    author: {
      name: "Jevon Hill",
      role: "Software Data Engineer",
      href: "#",
      imageUrl: kp_logo,
    },
  },
];

// ---------------------------
// Landing Page
// ---------------------------

export default function Page() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div ref={ref} className="relative text-black dark:text-white">
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#d4a86a]/70 via-[#7e5a36]/60 to-[#1e1308]/90 dark:from-black dark:via-[#2a2115]/80 dark:to-[#0e0a05]"
          style={{ y: y1 }}
        />

        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
            Jevon Hill
          </h1>
          <p className="mt-4 text-lg text-[#f5e9db] max-w-xl mx-auto">
            <Typewriter
              words={[
                "Software Data Engineer crafting intelligent, data-driven solutions for healthcare automation and analytics.",
              ]}
              typeSpeed={40}       // typing speed
              deleteSpeed={0}      // no deletion
              delaySpeed={1000}    // slight pause before starting
              cursor
              cursorStyle="|"
            />
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                const yOffset = -40; // optional offset for padding under navbar
                const y =
                  projectsSection.getBoundingClientRect().top + window.scrollY + yOffset;

                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });
              }
            }}
            className="mt-10 inline-block rounded-full bg-[#3c200b] text-white px-6 py-3 text-sm font-semibold shadow-lg hover:bg-[#2a2115]"
          >
            View Projects
          </motion.button>
        </motion.div>
      </section>

      {/* PROJECT SECTION */}
      <section
        id="projects"
        className="py-24 px-6 sm:px-12 bg-[#fef9f3] dark:bg-[#0e0a05]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#3c200b] dark:text-[#e5caa5]"
          >
            Featured Projects
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {posts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-white/70 dark:bg-[#1b140b]/70 backdrop-blur-sm"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#7e4519] dark:text-[#e5caa5] font-semibold">
                      {post.category.title}
                    </span>
                    <time
                      dateTime={post.datetime}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      {post.date}
                    </time>
                  </div>
                  <h3 className="text-lg font-semibold text-[#3c200b] dark:text-white group-hover:underline">
                    <a href={post.href}>{post.title}</a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {post.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-x-4 px-6 pb-6">
                  <Image
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full bg-gray-100 dark:bg-gray-800"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#3c200b] dark:text-[#e5caa5]">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {post.author.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-20">
            <p className="font-bold text-[#3c200b] dark:text-[#e5caa5]">
              More coming soon — yes, there’s more on the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
