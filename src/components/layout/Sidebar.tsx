"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-80 border-r border-white/5 glass flex flex-col shrink-0 h-full">
            <div className="p-6 border-b border-white/5">
                <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Explore</h3>
                <h2 className="text-lg font-bold text-white">Problem Library</h2>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 sidebar-scroll space-y-6">
                <div className="space-y-2">
                    <div className="flex items-center justify-between group cursor-pointer px-2">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-lg">list</span>
                            <span className="text-sm font-bold text-slate-200">Linked List</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-0.5 rounded">4</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 px-2 mb-3">
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/10">Two Pointers</span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">Recursion</span>
                    </div>
                    <div className="space-y-1">
                        <Link href="/visualizer/linked-list/reverse" className="group flex items-center justify-between px-3 py-2.5 rounded-xl bg-primary/10 border border-primary/30 text-white cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="size-1.5 rounded-full bg-difficulty-easy"></span>
                                <span className="text-xs font-medium">Reverse Linked List</span>
                            </div>
                            <span className="material-symbols-outlined text-primary text-xs opacity-100">play_circle</span>
                        </Link>
                        <div className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="size-1.5 rounded-full bg-difficulty-medium"></span>
                                <span className="text-xs font-medium">Detect Cycle</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-600 text-xs opacity-0 group-hover:opacity-100">play_circle</span>
                        </div>
                        <div className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="size-1.5 rounded-full bg-difficulty-medium"></span>
                                <span className="text-xs font-medium">Merge Two Sorted Lists</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-600 text-xs opacity-0 group-hover:opacity-100">play_circle</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between px-2 cursor-pointer group">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors text-lg">grid_view</span>
                            <span className="text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors">Arrays & Hashing</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 px-2 mb-3">
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">Sliding Window</span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">Prefix Sum</span>
                    </div>
                    <div className="space-y-1">
                        <Link href="/visualizer/array/two-sum" className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="size-1.5 rounded-full bg-difficulty-easy"></span>
                                <span className="text-xs font-medium">Two Sum</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-600 text-xs opacity-0 group-hover:opacity-100">play_circle</span>
                        </Link>
                        <div className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="size-1.5 rounded-full bg-difficulty-hard"></span>
                                <span className="text-xs font-medium">Longest Substring</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-600 text-xs opacity-0 group-hover:opacity-100">play_circle</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center justify-between px-2 cursor-pointer group">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors text-lg">layers</span>
                            <span className="text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors">Dynamic Programming</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 px-2 mb-3">
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">Memoization</span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">Bottom-Up</span>
                    </div>
                    <div className="space-y-1">
                        <div className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="size-1.5 rounded-full bg-difficulty-easy"></span>
                                <span className="text-xs font-medium">Climbing Stairs</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-600 text-xs opacity-0 group-hover:opacity-100">play_circle</span>
                        </div>
                        <div className="group flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-slate-200 transition-all cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="size-1.5 rounded-full bg-difficulty-hard"></span>
                                <span className="text-xs font-medium">Coin Change</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-600 text-xs opacity-0 group-hover:opacity-100">play_circle</span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="p-4 border-t border-white/5">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-xs text-primary">auto_awesome</span>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Learning Stats</p>
                    </div>
                    <p className="text-xs text-slate-300 font-medium">12 problems mastered</p>
                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div className="w-1/3 h-full bg-primary"></div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
