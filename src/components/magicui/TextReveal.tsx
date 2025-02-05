"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  text: string;
}

export const TextReveal: FC<TextRevealProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Adjust animation range
  });

  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn(
        "relative z-0 flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div className="sticky top-0 mx-auto flex w-full items-center bg-transparent px-[1rem] py-[4rem]">
        <p className="flex flex-wrap gap-x-2 gap-y-3 p-4 text-lg font-semibold text-black/20 dark:text-white/20 md:p-6 md:text-xl lg:p-8 lg:text-2xl xl:text-3xl">
          {/* Keep "At Spritle" always white and non-animated */}
          <span className="text-white dark:text-white">At Spritle</span>{" "}

          {/* Reveal other words progressively */}
          {words.slice(2).map((word, i) => {
            const start = i / words.length; // Start time for each word
            const end = start + 0.1; // End time for each word
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>; // Replaced `any` with `MotionValue<number>`
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  // Restrict animation to only activate when scrolling down
  const opacity = useTransform(progress, range, [0, 1], { clamp: false });

  return (
    <span className="relative mx-1 lg:mx-2">
      {/* Background placeholder for smoother transitions */}
      <span className="absolute opacity-30">{children}</span>
      {/* Animated word */}
      <motion.span
        style={{ opacity }}
        className="text-white dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  );
};
