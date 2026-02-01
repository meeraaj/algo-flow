// src/app/page.tsx
export default function LandingPage() {
    return (
        <div className="relative min-h-screen bg-obsidian overflow-hidden selection:bg-primary/30">
            {/* Cinematic Mesh Background */}
            <div className="mesh-bg" />

            <main className="relative z-10 flex flex-col items-center justify-center px-6 py-24">
                {/* Beta Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Now in Spatial Beta
                </div>

                {/* Headline */}
                <h1 className="text-center text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.04em] mb-8">
                    Master the Logic, <br />
                    <span className="text-gradient">Not Just the Syntax</span>
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <button className="flex min-w-[200px] items-center justify-center rounded-full h-14 px-8 border-2 border-primary text-primary font-black tracking-wide hover:bg-primary hover:text-obsidian transition-all neon-glow">
                        Launch AlgoSphere
                    </button>
                </div>
            </main>
        </div>
    );
}