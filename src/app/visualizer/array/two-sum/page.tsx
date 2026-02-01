"use client";

import { useEffect } from "react";
import AppHeader from "@/components/layout/AppHeader";
import Sidebar from "@/components/layout/Sidebar";
import ArrayVisualizer from "@/components/visualizers/ArrayVisualizer/ArrayVisualizer";
import CodePanel from "@/components/editor/CodePanel";
import Controls from "@/components/visualizers/controls/Controls";
import AIAssistant from "@/components/ai/AIAssistant";
import { useVisualizerStore } from "@/store/useVisualizerStore";
import { twoSumSteps, twoSumCode } from "@/lib/algorithms/twoSum";

export default function TwoSumPage() {
    const { loadAlgorithm, activeLine } = useVisualizerStore();

    useEffect(() => {
        // Initialize with a sorted array for Two Sum (Two Pointer technique requires sorted)
        // Or just an example array where we look for target 9
        const nums = [2, 7, 11, 15];
        const target = 9;
        const steps = twoSumSteps(nums, target);
        loadAlgorithm(steps);
    }, [loadAlgorithm]);

    return (
        <div className="flex flex-col h-screen bg-background-dark overflow-hidden font-display">
            <AppHeader />

            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar - Problem Library */}
                <Sidebar />

                {/* Main Visualizer Area */}
                <main className="flex-1 flex flex-col relative bg-[#050505] perspective-1000">
                    {/* Header */}
                    <div className="absolute top-8 left-8 z-10 pointer-events-none">
                        <h2 className="text-4xl font-black tracking-tighter mb-4 text-white">
                            Array: <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Two Sum</span>
                        </h2>
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-wider backdrop-blur-md">Time: O(n)</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-wider backdrop-blur-md">Space: O(1)</span>
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-success/10 border border-accent-success/20 text-[10px] font-bold text-accent-success uppercase tracking-wider backdrop-blur-md">
                                <span className="size-1.5 rounded-full bg-accent-success"></span>
                                Easy
                            </div>
                        </div>
                    </div>

                    {/* Canvas */}
                    <div className="flex-1 flex items-center justify-center relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent">
                        <ArrayVisualizer />
                    </div>

                    {/* AI Assistant */}
                    <div className="absolute bottom-8 right-8 z-20">
                        <AIAssistant />
                    </div>
                </main>

                {/* Right Sidebar - Code & Controls */}
                <aside className="w-[480px] flex flex-col border-l border-white/5 bg-[#0a0a0a]">
                    <div className="flex items-center justify-between px-6 py-3 border-b border-white/5">
                        <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Editor</span>
                        <div className="flex gap-2">
                            <span className="text-[10px] font-bold text-white bg-white/10 px-2 py-1 rounded hover:bg-white/20 cursor-pointer">Python</span>
                            <span className="text-[10px] font-bold text-white/40 hover:text-white bg-transparent px-2 py-1 rounded cursor-pointer transition-colors">Java</span>
                        </div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-col relative">
                        <CodePanel code={twoSumCode} language="python" activeLine={activeLine} />
                    </div>
                    <Controls />
                </aside>
            </div>
        </div>
    );
}
