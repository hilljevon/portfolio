"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircleIcon, ChevronDown } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const analyticSnippet = "/reno-dash-snip.png"

function ParallaxSection({
    id,
    title,
    content,
    index = 0,
}: {
    id?: string;
    title: string;
    content: string;
    index?: number;
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 60%"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["80px", "0px"]);

    return (
        <motion.div
            id={id}
            ref={ref}
            style={{ y }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="mb-20 scroll-mt-24"
        >
            <h2 className="text-3xl font-semibold text-[#3c200b] dark:text-white mb-4">
                {title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {content}
            </p>
        </motion.div>
    );
}

function NextSectionButton({ sectionIds }: { sectionIds: string[] }) {
    const currentRef = useRef(0);

    const handleNext = () => {
        const current = currentRef.current;
        const nextIndex = current + 1 < sectionIds.length ? current + 1 : 0;
        const nextId = sectionIds[nextIndex];
        const nextEl = document.getElementById(nextId);

        if (nextEl) {
            nextEl.scrollIntoView({ behavior: "smooth", block: "start" });
            currentRef.current = nextIndex;
        }
    };

    return (
        <div className="fixed right-6 bottom-1/2 translate-y-1/2 z-50 flex flex-col items-center gap-2">
            <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xs text-gray-600 dark:text-gray-300 text-center w-24 leading-tight"
            >
                Click arrow to scroll
            </motion.p>

            <button
                onClick={handleNext}
                className="bg-[#3c200b] dark:bg-[#e5caa5] text-white dark:text-[#1a120a]
          rounded-full p-3 shadow-md hover:scale-105 hover:shadow-lg
          transition-all duration-300 focus:outline-none"
                aria-label="Scroll to next section"
            >
                <ChevronDown className="w-5 h-5" />
            </button>
        </div>
    );
}

export default function AnalyticPlatformPost() {
    const highlightsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: highlightsRef,
        offset: ["start 80%", "end 60%"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["40px", "0px"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["80px", "0px"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["120px", "0px"]);
    const y4 = useTransform(scrollYProgress, [0, 1], ["160px", "0px"]);

    const highlights = [
        "Modernized leadership reporting workflows by replacing legacy SAS/Power BI processes.",
        "Built fully interactive filtering and cross-analysis system across 10+ metrics and dimensions.",
        "Engineered modular data pipelines in Python and PostgreSQL for real-time metric updates.",
        "Improved decision-making efficiency, enabling faster staffing and performance insights.",
    ];

    const yValues = [y1, y2, y3, y4];

    const sectionIds = ["overview", "architecture", "explore", "impact", "highlights"];

    return (
        <div className="bg-gradient-to-b from-[#fefaf6] to-[#f4e4d0] dark:from-[#0e0a05] dark:to-[#2a2115] min-h-screen px-6 py-24 sm:py-32 lg:px-8 scroll-smooth">
            <div className="mx-auto max-w-3xl text-gray-700 dark:text-gray-300">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#7e4519] dark:text-[#e5caa5]">
                        Analytics & Data Engineering
                    </p>
                    <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-[#3c200b] dark:text-white">
                        Clinical Analytics and Insights Platform (SAS Replacement)
                    </h1>

                    <div className="my-6 text-lg underline text-blue-500 hover:text-blue-400">
                        <a
                            href="https://reno-dashboard.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live Sample
                        </a>
                    </div>

                    <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-400">
                        Developed a full-stack analytics web platform (Next.js, Python,
                        PostgreSQL, Spring Boot) as a modern replacement for Power BI/SAS,
                        enabling real-time data visualization, dynamic filters, and
                        multi-dimensional exploration of inpatient case metrics.
                    </p>
                </motion.div>

                {/* HERO IMAGE */}
                <div className="relative aspect-video overflow-hidden rounded-2xl mb-20 shadow-lg">
                    <Image
                        src={analyticSnippet}
                        alt="Clinical Analytics Platform"
                        width={1200}
                        height={700}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* SECTIONS */}
                <ParallaxSection
                    id="overview"
                    title="Overview"
                    content="Leadership previously relied on static SAS and Power BI reports that required manual data refreshes and limited interactivity. This platform was built to automate those reports, consolidate KPIs across departments, and allow end-users to filter and cross-analyze metrics in real time."
                />

                <ParallaxSection
                    id="architecture"
                    title="Architecture"
                    content="The backend integrates PostgreSQL for storage, Python for preprocessing, and Spring Boot for API orchestration. Data pipelines automatically aggregate monthly case census data and performance metrics. The frontend, built in Next.js and Recharts, dynamically renders data visualizations with customizable filters and category toggles."
                />

                <ParallaxSection
                    id="explore"
                    title="Explore Mode"
                    content="The Explore Mode module allows users to dive deep into performance by RN, facility, or coverage type. Built with React state management and useEffect hooks, it enables real-time filtering and interactive chart transitions. Each filter update triggers dynamic animations and toast notifications for better user feedback."
                />

                <ParallaxSection
                    id="impact"
                    title="Impact"
                    content="By replacing SAS workflows with a modern, interactive dashboard, this platform cut leadership’s reporting time from days to seconds, improved transparency across teams, and established a reusable, scalable analytics foundation for future machine learning integration."
                />

                {/* HIGHLIGHTS */}
                <div
                    id="highlights"
                    ref={highlightsRef}
                    className="mt-16 border-t border-gray-200 dark:border-white/10 pt-10"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-2xl font-semibold text-[#3c200b] dark:text-[#e5caa5] mb-8"
                    >
                        Highlights
                    </motion.h2>

                    <ul className="space-y-6 text-gray-700 dark:text-gray-400">
                        {highlights.map((text, i) => (
                            <motion.li
                                key={i}
                                style={{ y: yValues[i] }}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-x-3 items-start"
                            >
                                <CheckCircleIcon className="text-[#7e4519] dark:text-[#e5caa5] size-5 mt-0.5 flex-none" />
                                <span>{text}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ✅ Floating button */}
            <NextSectionButton sectionIds={sectionIds} />
        </div>
    );
}
