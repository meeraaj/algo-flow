"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useVisualizerStore } from "@/store/useVisualizerStore";
import { ListNode } from "@/lib/algorithms/reverseLinkedList";

export default function LinkedListVisualizer({ initialOrder }: { initialOrder: string[] }) {
    const { data, pointers } = useVisualizerStore();
    const nodes = data as Record<string, ListNode>;

    if (!nodes || Object.keys(nodes).length === 0) return <div>Loading...</div>;

    return (
        <div className="flex items-center justify-center p-20 min-h-[600px] w-full overflow-x-auto bg-[#050505]">
            <div className="flex gap-32 items-center relative">
                {initialOrder.map((id, index) => {
                    const node = nodes[id];
                    const isCurr = pointers["curr"] === id;
                    const isPrev = pointers["prev"] === id;
                    const isHead = pointers["head"] === id;

                    const nextId = node.next;
                    let arrowState = "none";
                    if (nextId) {
                        const nextIndex = initialOrder.indexOf(nextId);
                        if (nextIndex === index + 1) arrowState = "forward";
                        else if (nextIndex === index - 1) arrowState = "backward";
                    }

                    // Reference Image Style: Large Circle, Hex Address, Glow
                    return (
                        <div key={id} className="relative flex flex-col items-center group">
                            {/* Top Labels (HEAD, CURRENT) */}
                            <div className="absolute -top-32 flex flex-col items-center h-24 justify-end w-40 pointer-events-none">
                                <AnimatePresence>
                                    {isHead && (
                                        <motion.div layoutId="ptr-head" className="absolute top-0 flex flex-col items-center">
                                            <span className="text-xs font-bold text-slate-400 tracking-widest mb-1">HEAD</span>
                                            <div className="h-8 w-px bg-slate-400/50"></div>
                                        </motion.div>
                                    )}
                                    {isCurr && (
                                        <motion.div
                                            layoutId="ptr-curr"
                                            className="z-20 flex flex-col items-center mb-4"
                                        >
                                            <span className="text-xs font-bold text-primary tracking-[0.2em] mb-2 uppercase drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]">Current</span>
                                            <motion.div
                                                className="w-16 h-1 bg-primary rounded-full shadow-[0_0_15px_rgba(0,212,255,1)]"
                                                layoutId="ptr-curr-underline"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* The Node: Circle */}
                            <motion.div
                                layoutId={id}
                                className={`
                        w-40 h-40 rounded-full flex flex-col items-center justify-center relative z-10 transition-all duration-500
                        ${isCurr
                                        ? "bg-obsidian border-[4px] border-primary shadow-[0_0_60px_rgba(0,212,255,0.25)] scale-110"
                                        : "bg-[#0a0a0a] border-[2px] border-white/10 text-white/40"}
                        ${isPrev ? "border-accent-success/50" : ""}
                    `}
                            >
                                <span className={`text-5xl font-bold tracking-tight mb-2 ${isCurr ? "text-white" : "text-white/30"}`}>
                                    {node.val}
                                </span>
                                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                                    0x{node.val}F
                                </span>
                            </motion.div>

                            {/* Connection Lines (Arrows) */}
                            {/* Forward: Standard Next */}
                            {arrowState === "forward" && (
                                <div className="absolute left-[100%] top-1/2 -translate-y-1/2 w-32 h-[2px] bg-white/10 overflow-visible -z-10">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 border-t-2 border-r-2 border-white/30 rotate-45 transform translate-x-[-4px]"></div>
                                </div>
                            )}

                            {/* Backward: Reversed Next (The "Flip") */}
                            {arrowState === "backward" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute right-[100%] top-1/2 -translate-y-1/2 w-32 h-[2px] bg-primary shadow-[0_0_15px_rgba(0,212,255,0.5)] overflow-visible z-0"
                                >
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 border-b-2 border-l-2 border-primary rotate-45 transform translate-x-[4px]"></div>

                                    {/* Code annotation for the operation */}
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary whitespace-nowrap bg-black/50 px-2 py-1 rounded"
                                    >
                                        prev &lt;= next
                                    </motion.span>
                                </motion.div>
                            )}
                        </div>
                    );
                })}

                {/* Null Terminator */}
                <div className="flex flex-col items-center justify-center opacity-30 gap-2">
                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-white/50">NULL</span>
                    </div>
                    <span className="text-[10px] font-mono text-white/20 tracking-widest">0x0000</span>
                </div>
            </div>
        </div>
    );
}
