"use client";

import { useVisualizerStore } from "@/store/useVisualizerStore";

export default function EditorSidebar({ code, language }: { code: string, language: string }) {
    const { activeLine, data, pointers } = useVisualizerStore();
    const lines = code.split("\n");

    return (
        <aside className="w-[450px] border-l border-white/10 bg-[#0d1117] flex flex-col shrink-0 h-full">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-surface-dark">
                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Editor</span>
                    <div className="flex bg-background-dark rounded-full p-1 border border-white/5">
                        <button className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/10 text-white">Python</button>
                        <button className="px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 hover:text-white transition-colors">Java</button>
                    </div>
                </div>
                <button className="text-slate-400 hover:text-white"><span className="material-symbols-outlined text-sm">terminal</span></button>
            </div>

            <div className="flex-1 font-mono text-sm p-4 overflow-y-auto">
                <table className="w-full border-collapse">
                    <tbody>
                        {lines.map((line, i) => {
                            const isRun = activeLine === i + 1;
                            return (
                                <tr key={i} className={`group ${isRun ? "bg-primary/10 border-l-2 border-primary" : ""}`}>
                                    <td className={`w-10 text-right pr-4 select-none text-xs ${isRun ? "text-primary font-bold" : "text-slate-600"}`}>
                                        {i + 1}
                                    </td>
                                    <td className={`pl-4 ${isRun ? "text-white" : "text-slate-400"}`}>
                                        <div dangerouslySetInnerHTML={{ __html: highlightSyntax(line) }} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="h-48 border-t border-white/10 bg-black/40 p-4 font-mono">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Stack Tracer</span>
                    <span className="text-[10px] text-accent-success">Iter: {activeLine > 0 ? activeLine : 0}</span>
                </div>
                <div className="space-y-2 text-xs">
                    {/* Dynamic Pointers Display usually derived from store */}
                    {Object.entries(pointers).map(([key, val]) => (
                        <div key={key} className="flex justify-between">
                            <span className="text-slate-500">{key}:</span>
                            <span className="text-primary">{val !== undefined ? `Node(${val})` : "None"}</span>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}

// Simple highlighter to mimic the HTML static one
function highlightSyntax(line: string) {
    if (!line) return "&nbsp;";
    let html = line
        .replace(/def /g, '<span class="text-purple-400">def </span>')
        .replace(/return /g, '<span class="text-purple-400">return </span>')
        .replace(/while /g, '<span class="text-purple-400">while </span>')
        .replace(/if /g, '<span class="text-purple-400">if </span>')
        .replace(/else:/g, '<span class="text-purple-400">else:</span>')
        .replace(/None/g, '<span class="text-orange-400">None</span>')
        .replace(/True/g, '<span class="text-orange-400">True</span>')
        .replace(/False/g, '<span class="text-orange-400">False</span>');
    // Function names roughly
    html = html.replace(/([a-zA-Z_][a-zA-Z0-9_]*)\(/g, '<span class="text-yellow-200">$1</span>(');
    return html;
}
