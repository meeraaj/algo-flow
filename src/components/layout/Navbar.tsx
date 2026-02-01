"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname?.startsWith(path);

    return (
        // Changed 'glass' to 'glass-card' for cinematic depth
        <header className="flex items-center justify-between px-8 py-4 border-b border-white/5 glass-card sticky top-0 z-50">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                    {/* Updated text color to match obsidian black */}
                    <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-[#030405]">
                        <span className="material-symbols-outlined font-bold">hub</span>
                    </div>
                    <h1 className="text-xl font-black tracking-tighter uppercase italic text-white">
                        AlgoSphere <span className="text-primary font-normal not-italic lowercase">v2.0</span>
                    </h1>
                </div>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
                    <Link href="/visualizer/linked-list/reverse" className={clsx("hover:text-primary transition-colors", isActive("/visualizer") && "text-primary")}>Visualizer</Link>
                    <Link href="/library" className={clsx("hover:text-primary transition-colors", isActive("/library") && "text-primary")}>Library</Link>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative group">
                    <input className="bg-white/5 border-none rounded-full px-6 py-2 text-sm focus:ring-2 focus:ring-primary w-64 transition-all text-white placeholder:text-slate-500" placeholder="Search algorithms..." type="text" />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
                </div>
                <button className="bg-primary text-[#030405] px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform neon-glow">
                    Upgrade Pro
                </button>
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-primary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white/50">person</span>
                </div>
            </div>
        </header>
    );
}