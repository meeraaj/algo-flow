"use client";

import { clsx } from "clsx";
import { useEffect, useRef } from "react";
// Using a basic implementation for now to ensure strict styling control matching the design
// We can enhance with real syntax highlighting library later if needed, 
// but for the "Cinematic" look, manual control over the active line DOM is precise.

interface CodePanelProps {
    code: string;
    language: string;
    activeLine?: number; // 1-indexed
}

export default function CodePanel({ code, language, activeLine }: CodePanelProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to active line
    useEffect(() => {
        if (activeLine && scrollRef.current) {
            const row = scrollRef.current.querySelector(`[data-line="${activeLine}"]`);
            if (row) {
                row.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }
    }, [activeLine]);

    const lines = code.split("\n");

    return (
        <div className="flex flex-col h-full bg-[#0d1117] border-l border-white/10 shrink-0 w-[450px]">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-surface-dark">
                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Editor</span>
                    <div className="flex bg-background-dark rounded-full p-1 border border-white/5">
                        <button className={clsx("px-3 py-1 rounded-full text-[10px] font-bold transition-colors", language === "python" ? "bg-white/10 text-white" : "text-slate-500")}>Python</button>
                        <button className={clsx("px-3 py-1 rounded-full text-[10px] font-bold transition-colors", language === "cpp" ? "bg-white/10 text-white" : "text-slate-500")}>C++</button>
                    </div>
                </div>
                <button className="text-slate-400 hover:text-white"><span className="material-symbols-outlined text-sm">terminal</span></button>
            </div>

            {/* Code Area */}
            <div className="flex-1 font-mono text-sm p-4 overflow-y-auto" ref={scrollRef}>
                <table className="w-full border-collapse">
                    <tbody>
                        {lines.map((line, i) => {
                            const lineNum = i + 1;
                            const isActive = lineNum === activeLine;
                            return (
                                <tr
                                    key={i}
                                    data-line={lineNum}
                                    className={clsx("group transition-colors duration-300", isActive && "code-active-line")}
                                >
                                    <td className={clsx("w-10 text-right pr-4 select-none text-xs align-top pt-1", isActive ? "text-primary font-bold" : "text-slate-600")}>
                                        {lineNum}
                                    </td>
                                    <td className={clsx("pl-4 py-1 whitespace-pre-wrap break-all transition-colors", isActive ? "text-white" : "text-slate-400")}>
                                        {/* Basic syntax coloring simulation for aesthetic */}
                                        {simulateHighlighting(line)}
                                        {isActive && <span className="text-primary ml-2 animate-pulse">▋</span>}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Stack Tracer / Debugger Placeholder */}
            <div className="h-48 border-t border-white/10 bg-black/40 p-4 font-mono">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Stack Tracer</span>
                    <span className="text-[10px] text-accent-success">Ready</span>
                </div>
                <div className="text-xs text-slate-500 italic">
                    Variables will appear here during execution.
                </div>
            </div>
        </div>
    );
}

// Simple helper to mimic the design's syntax highlighting without a heavy library for now.
// For the final version, we can swap this with PrismJS mapped to line tokens.
function simulateHighlighting(line: string) {
    if (!line) return null;

    // Very naive regex replacer for "demo" purpose as per design aesthetic
    // Real implementation would parse tokens.
    const parts = line.split(/(\s+|[(){},.])/);

    return parts.map((part, i) => {
        if (["def", "class", "return", "while", "if", "else", "void", "int"].includes(part)) return <span key={i} className="text-purple-400">{part}</span>;
        if (["None", "True", "False", "NULL"].includes(part)) return <span key={i} className="text-orange-400">{part}</span>;
        if (part.match(/^[0-9]+$/)) return <span key={i} className="text-blue-400">{part}</span>;
        // Function def
        if (i > 0 && parts[i - 1] === "def") return <span key={i} className="text-yellow-200">{part}</span>;

        return <span key={i}>{part}</span>;
    });
}
