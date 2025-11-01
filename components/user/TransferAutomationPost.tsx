"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircleIcon, ChevronDown } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const txSnippet = "/tx_tool_snippet.png";

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

// ✅ Floating button with subtitle
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

export default function TransferAutomationPost() {
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
        "Reduced manual documentation and spreadsheet review by over 2 hours daily.",
        "Condensed physician summaries from 15 minutes to under one second via automated parsing.",
        "Developed centralized resource directory improving workflow accessibility.",
        "Established foundation for future clinical workflow automation tools.",
    ];

    const yValues = [y1, y2, y3, y4];

    // ✅ Define scroll order for the button
    const sectionIds = ["overview", "automation", "interface", "impact", "highlights"];

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
                        Automation & Workflow
                    </p>
                    <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-[#3c200b] dark:text-white">
                        Transfer Automation Dashboard
                    </h1>

                    <div className="my-6 text-lg underline text-blue-500 hover:text-blue-400">
                        <a
                            href="https://testing-git-demo-limited-jevons-projects-0dedbb2a.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live Sample
                        </a>
                    </div>

                    <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-400">
                        A full-stack dashboard that automates key inpatient transfer
                        workflows — summarizing clinical data, generating transfer requests,
                        and centralizing contact directories to save analysts and nurses 2–3
                        hours daily.
                    </p>
                </motion.div>

                {/* HERO IMAGE */}
                <div className="relative aspect-video overflow-hidden rounded-2xl mb-20 shadow-lg">
                    <Image
                        src={txSnippet}
                        alt="Transfer Automation Dashboard"
                        width={1200}
                        height={700}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* SECTIONS */}
                <ParallaxSection
                    id="overview"
                    title="Overview"
                    content="This project was pivotal because it marked my transition from case management into software engineering. It enabled me to design and build applications that directly streamlined departmental workflows and showcased the power of automation in clinical operations."
                />

                <ParallaxSection
                    id="automation"
                    title="Automation Logic"
                    content="Analysts previously spent 15 minutes manually parsing lengthy clinical summaries. I developed parsing logic in TypeScript that extracts essential details automatically, reducing processing time to under one second. The dashboard also integrates ExcelJS parsing to process daily census files, generating ready-to-use clinical request templates for leadership."
                />

                <ParallaxSection
                    id="interface"
                    title="Interface & Workflow Integration"
                    content="The dashboard serves as a central hub for clinical operations, allowing users to input case details, generate summaries, and access repatriation resources all in one place. It dynamically adjusts content based on user input and includes a built-in contact directory for all regional facilities."
                />

                <ParallaxSection
                    id="impact"
                    title="Impact"
                    content="The Transfer Tool Automation Dashboard reduced documentation time by more than 70%, increased consistency across request submissions, and demonstrated measurable ROI in daily operations. It also served as the foundation for my transition into software engineering by proving the value of workflow automation in healthcare."
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
