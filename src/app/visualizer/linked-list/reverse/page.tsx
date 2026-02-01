"use client";

import { useEffect, useState } from "react";
import AppHeader from "@/components/layout/AppHeader";
import Sidebar from "@/components/layout/Sidebar";
import EditorSidebar from "@/components/layout/EditorSidebar";
import LinkedListVisualizer from "@/components/visualizers/LinkedListVisualizer/LinkedListVisualizer";
import Controls from "@/components/visualizers/controls/Controls";
import AIAssistant from "@/components/ai/AIAssistant";
import { useVisualizerStore } from "@/store/useVisualizerStore";
import { reverseListSteps, reverseListCode } from "@/lib/algorithms/reverseLinkedList";

export default function ReverseListPage() {
    const { loadAlgorithm } = useVisualizerStore();
    const [initialOrder, setInitialOrder] = useState<string[]>([]);

    useEffect(() => {
        // Initial List: 10 -> 25 -> 40 -> 68
        const nums = [10, 25, 40, 68];
        const { steps, ids } = reverseListSteps(nums);
        setInitialOrder(ids);
        loadAlgorithm(steps);
    }, [loadAlgorithm]);

    return (
        <div className="flex flex-col h-screen bg-background-dark overflow-hidden font-display text-white">
            <AppHeader />

            <div className="flex flex-1 overflow-hidden">
                {/* Left Sidebar */}
                <Sidebar />

                {/* Main Visualizer Area */}
                <div className="flex-1 flex flex-col relative bg-[#050505]">
                    <section className="flex-1 bg-background-dark/50 relative overflow-hidden flex flex-col">
                        {/* Header Overlay */}
                        <div className="absolute top-6 left-8 z-10 pointer-events-none">
                            <h2 className="text-3xl font-black tracking-tight mb-1">Singly Linked List: <span className="text-primary">Reverse</span></h2>
                            <div className="flex items-center gap-4">
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Time: O(n)</span>
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Space: O(1)</span>
                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-difficulty-easy/10 border border-difficulty-easy/20 text-[10px] font-bold text-difficulty-easy uppercase">
                                    <span className="size-1.5 rounded-full bg-difficulty-easy"></span>
                                    Easy
                                </div>
                            </div>
                        </div>

                        {/* Canvas */}
                        <div className="flex-1 flex items-center justify-center relative">
                            <LinkedListVisualizer initialOrder={initialOrder} />
                        </div>

                        {/* Controls (Bottom Center) */}
                        <Controls />
                    </section>

                    {/* AI Assistant (Bottom Right Overlay) */}
                    <div className="absolute bottom-8 right-8 z-20">
                        <AIAssistant />
                    </div>
                </div>

                {/* Right Sidebar */}
                <EditorSidebar code={reverseListCode} language="python" />
            </div>
        </div>
    );
}
