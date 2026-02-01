"use client";

import Link from "next/link";

export default function AppHeader() {
    return (
        <header className="h-20 border-b border-white/5 bg-background-dark/50 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-50">
            <div className="flex items-center gap-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="material-symbols-outlined text-primary text-2xl group-hover:rotate-180 transition-transform duration-700">hub</span>
                    <h1 className="text-xl font-bold tracking-tight text-white">
                        AlgoSphere <span className="text-primary text-sm font-normal opacity-60">v2.0</span>
                    </h1>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/visualizer/array/two-sum" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Visualizer</Link>
                    <Link href="/library" className="text-sm font-bold text-white">Library</Link>
                    <Link href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Challenges</Link>
                </nav>
            </div>

            <div className="flex items-center gap-6">
                {/* Search */}
                <div className="relative group hidden lg:block">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-white/20 text-lg group-focus-within:text-primary transition-colors">search</span>
                    <input
                        type="text"
                        placeholder="Search algorithms..."
                        className="w-64 h-10 bg-white/5 border border-white/10 rounded-full pl-10 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
                    />
                </div>

                <button className="h-9 px-4 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                    Upgrade Pro
                </button>

                <div className="size-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined text-white/60 text-lg">person</span>
                </div>
            </div>
        </header>
    );
}
