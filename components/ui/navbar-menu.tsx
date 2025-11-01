"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void; // 👈 allow null here
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className="relative"
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)} // handle leave locally instead of Menu
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer text-sm font-medium transition-colors",
          active === item
            ? "text-[#7e4519] dark:text-[#e5caa5]"
            : "text-neutral-700 dark:text-neutral-300 hover:text-[#7e4519] dark:hover:text-[#e5caa5]"
        )}
      >
        {item}
      </motion.p>

      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 8 }}
          transition={{ duration: 0.25 }}
          className="absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 z-50"
        >
          {/* Invisible hover buffer */}
          <div className="absolute -top-3 left-0 w-full h-3" />

          <div className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#0f0c09]/90 backdrop-blur-2xl shadow-lg w-[260px] sm:w-[320px]">
            <div className="p-4 text-sm text-neutral-700 dark:text-neutral-300">
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="flex items-center justify-center space-x-8 rounded-full border border-black/5 dark:border-white/10 bg-white/40 dark:bg-[#1a1410]/50 backdrop-blur-md shadow-sm px-8 py-3 transition-all duration-300"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="block text-neutral-700 dark:text-neutral-300 hover:text-[#7e4519] dark:hover:text-[#e5caa5] transition-colors"
    >
      {children}
    </a>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-6 inset-x-0 max-w-xl mx-auto z-50 transition-all duration-300",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-2">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/about">About</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-2">
            <HoveredLink href="/analytic-platform">Clinical Analytic Platform</HoveredLink>
            <HoveredLink href="/case-priority-app">
              Case Priority Automation Pipeline
            </HoveredLink>
            <HoveredLink href="/transfer-automation-app">
              Transfer Automation Dashboard
            </HoveredLink>
            <HoveredLink href="/data-dashboard-app">
              Data Analytics Interface
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-2">
            <HoveredLink href="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
