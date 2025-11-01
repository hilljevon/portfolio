"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircleIcon, ChevronDown } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const headshot = "/headshot-cartoon.png"; // Replace this with your actual headshot later

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
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
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

export default function AboutPage() {
    const highlightsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: highlightsRef,
        offset: ["start 80%", "end 60%"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["40px", "0px"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["80px", "0px"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["120px", "0px"]);

    const highlights = [
        "Currently pursuing a Master’s in Computer Science at Georgia Tech, specializing in Machine Learning.",
        "Skilled in designing and deploying full-stack applications that automate clinical operations.",
        "Comfortable across multiple stacks: Next.js, TypeScript, Python, PostgreSQL, and Spring Boot.",
    ];

    const yValues = [y1, y2, y3];

    const sectionIds = ["story", "focus", "techstack", "now", "highlights"];

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
                        About Me
                    </p>
                    <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-[#3c200b] dark:text-white">
                        I'm Jevon!
                    </h1>
                    <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-400">
                        I'm a software data engineer who specializes in automating healthcare
                        workflows, designing databases, and integrating legacy systems into
                        modern web applications.
                    </p>
                </motion.div>

                {/* HEADSHOT IMAGE */}
                <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-2xl mb-20 shadow-lg max-w-lg mx-auto">
                    <Image
                        src={headshot}
                        alt="Jevon Hill headshot"
                        width={800}
                        height={600}
                        className="object-contain w-full h-full rounded-2xl bg-[#f8f3ed] dark:bg-[#0e0a05]"
                    />
                </div>

                {/* SECTIONS */}
                <ParallaxSection
                    id="story"
                    title="My Story"
                    content={`I actually started out studying biology at UC Irvine, but I’ve always been drawn to technology. 
After graduating, I worked in healthcare and started noticing a lot of inefficiencies—people spending hours doing repetitive, manual work that could easily be automated.

I started writing small scripts to clean data and streamline inpatient workflows. Before long, those scripts turned into full web applications, and leadership created a new position for me to keep building out these solutions. That’s how I became a Software Data Engineer at Kaiser Permanente.`}
                />

                <ParallaxSection
                    id="focus"
                    title="What I Focus On"
                    content={`Most of my work revolves around automating inpatient case management processes. 
I build tools that save clinicians hours every day—things like a machine learning triage system, transfer automation dashboards, and data-driven analytics platforms for leadership. 

I like solving complex problems in simple ways and creating products that people actually use day to day.`}
                />

                <ParallaxSection
                    id="techstack"
                    title="My Tech Stack"
                    content={`I work across the full stack—mostly with Next.js, TypeScript, Python, PostgreSQL, Pandas, and Spring Boot. 
On the data side, I use TensorFlow and scikit-learn for modeling, and Pandas for heavy data preprocessing. 
I also deploy APIs through Railway and containerize my apps with Docker when needed.`}
                />

                <ParallaxSection
                    id="now"
                    title="What I’m Doing Now"
                    content={`I’m currently pursuing my Master’s in Computer Science at Georgia Institute of Technology, specializing in Machine Learning. 
Right now, I’m focused on scaling my analytics and automation projects at Kaiser while continuing to grow my technical depth in AI, backend systems, and data engineering.`}
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

            {/* Floating next section button */}
            <NextSectionButton sectionIds={sectionIds} />
        </div>
    );
}
