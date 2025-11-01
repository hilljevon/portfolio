"use client";

import Image from "next/image";
import { CheckCircleIcon, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const trainingSnippet = "/triage-mlTraining-snip.png";

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

// ✅ Next Section Button
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
            {/* Subtle subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xs text-gray-600 dark:text-gray-300 text-center w-24"
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

export default function CasePriorityPost() {
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
        "Reduced triage time by 95% (from 1.5 hours to <10 seconds)",
        "Achieved 90–95% accuracy, precision, recall, and F1 score",
        "Deployed via a Railway-hosted API for real-time integration",
        "Frontend built in Next.js with ExcelJS-based spreadsheet parsing",
    ];

    const yValues = [y1, y2, y3, y4];

    // ✅ Define section order here
    const sectionIds = ["problem", "approach", "impact", "highlights", "tools"];

    return (
        <div className="bg-gradient-to-b from-[#fefaf6] to-[#f4e4d0] dark:from-[#0e0a05] dark:to-[#2a2115] min-h-screen px-6 py-24 sm:py-32 lg:px-8 scroll-smooth">
            <div className="mx-auto max-w-3xl text-gray-700 dark:text-gray-300">
                {/* HEADER SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#7e4519] dark:text-[#e5caa5]">
                        Machine Learning
                    </p>
                    <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-[#3c200b] dark:text-white">
                        Case Priority Automation Pipeline
                    </h1>
                    <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-400">
                        Developed a full-stack web application to automate inpatient case
                        triage using TensorFlow and Next.js. Replaced a manual 1.5–2 hour
                        process with a real-time, intelligent scoring pipeline that predicts
                        prioritization within seconds with over 90% accuracy.
                    </p>
                </motion.div>

                {/* HERO IMAGE */}
                <div className="relative aspect-video overflow-hidden rounded-2xl mb-20 shadow-lg">
                    <Image
                        src="/case_learn_snippet.png"
                        alt="Case Priority Automation App"
                        width={1200}
                        height={700}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* SECTION: PROBLEM */}
                <ParallaxSection
                    id="problem"
                    title="Problem"
                    content="The department manages approximately 450 inpatient cases daily, far exceeding available staffing. Leadership manually reviewed spreadsheets containing 30+ parameters per case—hospital, level of care, diagnoses, and anticipated disposition—taking 1.5–2 hours each morning. The objective was to automate triage while maintaining or improving decision quality and consistency."
                />

                {/* SECTION: APPROACH */}
                <ParallaxSection
                    id="approach"
                    title="Approach"
                    content="I designed and implemented a TensorFlow-based model to calculate prioritization scores between 0 and 1, where higher values represented greater urgency. Data preprocessing leveraged pandas for rule-based filtering and normalization, while categorical features like hospital and diagnosis were one-hot encoded. The model architecture was fine-tuned for recall and precision balance, achieving performance metrics consistently above 90%."
                />

                {/* CODE SNIPPET */}
                <figure className="mt-12 mb-20">
                    <Image
                        src={trainingSnippet}
                        alt="Model Training Code Snippet"
                        width={1100}
                        height={600}
                        className="rounded-xl shadow-md object-cover w-full h-auto bg-gray-100 dark:bg-gray-800"
                    />
                    <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-gray-400">
                        Example of model training logic and TensorFlow configuration.
                    </figcaption>
                </figure>

                {/* SECTION: IMPACT */}
                <ParallaxSection
                    id="impact"
                    title="Impact"
                    content="This solution reduced daily prioritization time from nearly two hours to under ten seconds, freeing leadership for higher-level decision-making and improving throughput across case management workflows. The model outputs also serve as an auditable record of decision logic, supporting compliance and consistency."
                />

                {/* SECTION: HIGHLIGHTS */}
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

                {/* SECTION: TOOLS */}
                <div
                    id="tools"
                    className="mt-20 border-t border-gray-200 dark:border-white/10 pt-10"
                >
                    <h2 className="text-2xl font-semibold text-[#3c200b] dark:text-[#e5caa5] mb-6">
                        Tools Used
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-gray-700 dark:text-gray-400">
                        <p>Next.js</p>
                        <p>TensorFlow</p>
                        <p>Pandas</p>
                        <p>ExcelJS</p>
                        <p>Python</p>
                        <p>Railway</p>
                    </div>
                </div>
            </div>

            {/* ✅ NEXT SECTION BUTTON */}
            <NextSectionButton sectionIds={sectionIds} />
        </div>
    );
}
