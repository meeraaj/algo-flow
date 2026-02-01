"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useVisualizerStore } from "@/store/useVisualizerStore";

export default function ArrayVisualizer() {
    const { data, pointers } = useVisualizerStore();
    const items = Array.isArray(data) ? data : [];

    // Safety check to prevent crash if data is empty layout happens
    if (items.length === 0) return null;

    return (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[500px]">
            <div className="flex gap-4 md:gap-8 items-center relative px-20">
                <AnimatePresence>
                    {items.map((val: any, index: number) => {
                        const isLeft = pointers["left"] === index;
                        const isRight = pointers["right"] === index;
                        const isSum = isLeft || isRight;

                        return (
                            <div key={index} className="relative flex flex-col items-center group">
                                {/* Top Pointer (Left) */}
                                <div className="absolute -top-24 flex flex-col items-center h-20 justify-end pointer-events-none">
                                    <AnimatePresence>
                                        {isLeft && (
                                            <motion.div
                                                layoutId="ptr-left"
                                                className="flex flex-col items-center"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                            >
                                                <span className="text-xs font-bold text-primary tracking-widest mb-2">LEFT</span>
                                                <span className="material-symbols-outlined text-primary text-3xl animate-bounce">keyboard_arrow_down</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Bar / Box */}
                                <motion.div
                                    layout
                                    className={`
                                        w-20 h-20 md:w-32 md:h-32 rounded-2xl flex items-center justify-center text-4xl md:text-5xl font-bold border-[3px] relative z-10 transition-all duration-300
                                        ${isLeft || isRight
                                            ? "border-primary bg-primary/10 text-white shadow-[0_0_50px_rgba(0,212,255,0.3)] scale-110 z-20"
                                            : "border-white/10 bg-[#151515] text-white/40"}
                                    `}
                                >
                                    {val}
                                </motion.div>

                                {/* Index */}
                                <span className="absolute -bottom-8 text-xs text-white/30 font-mono tracking-widest">{index}</span>

                                {/* Bottom Pointer (Right) */}
                                <div className="absolute -bottom-28 flex flex-col items-center h-20 justify-start pointer-events-none">
                                    <AnimatePresence>
                                        {isRight && (
                                            <motion.div
                                                layoutId="ptr-right"
                                                className="flex flex-col items-center"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                            >
                                                <span className="material-symbols-outlined text-accent-success text-3xl animate-bounce">keyboard_arrow_up</span>
                                                <span className="text-xs font-bold text-accent-success tracking-widest mt-2">RIGHT</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Calculation / Context Info */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
                <AnimatePresence mode="wait">
                    {typeof pointers.left === "number" && typeof pointers.right === "number" && (
                        <motion.div
                            key={`${pointers.left}-${pointers.right}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 flex items-center gap-6 shadow-2xl"
                        >
                            <span className="text-xs text-white/40 font-bold tracking-widest uppercase">Target: 9</span>
                            <div className="h-4 w-px bg-white/10"></div>
                            <div className="flex items-center gap-3 text-3xl font-mono font-bold">
                                <span className="text-primary">{items[pointers.left]}</span>
                                <span className="text-white/40">+</span>
                                <span className="text-accent-success">{items[pointers.right]}</span>
                                <span className="text-white/40">=</span>
                                <span className={`${items[pointers.left] + items[pointers.right] === 9 ? "text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]" : "text-white"}`}>
                                    {items[pointers.left] + items[pointers.right]}
                                </span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
