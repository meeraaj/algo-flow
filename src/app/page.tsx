import Link from "next/link";

export default function LandingPage() {
  return (
    <body className="bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary/30 overflow-x-hidden">
      {/* Background Elements */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 mesh-bg">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAV36lm6yAMLJYDnZMV0wNC83Dqzzvp87vv-CyfmhNBXsUXQ18bnaV4Yj_Wug0VUb2bEfv8MPoq2MJ6awD2iT-HbPXE3RUp3QKhISwlU_wEsZJqH-PCFjggE-emtpDnoozsvL0xEh5yeqzWfiUdx1SIHx0UhphNkjZwKMsjjMAAMiUDeVFbmeH1BZKIqdsMYHaKEawHlC1CA7Oh1CwWHqoJPU5imclKQGEKBEFFjf31p9snEQcBB1r_aRjxnZWZTpD02jgs0pmbLzI')" }}></div>
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation Header */}
        <div className="px-6 lg:px-40 flex justify-center py-5">
          <header className="flex w-full max-w-[1200px] items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h2 className="text-xl font-black tracking-tighter uppercase italic">AlgoSphere</h2>
            </div>
            <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
              <nav className="flex items-center gap-8">
                <a className="text-white/60 hover:text-primary text-sm font-medium transition-colors" href="#">Documentation</a>
                <a className="text-white/60 hover:text-primary text-sm font-medium transition-colors" href="#">Github</a>
                <a className="text-white/60 hover:text-primary text-sm font-medium transition-colors" href="#">Discord</a>
              </nav>
              <Link href="/visualizer/array/two-sum">
                <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-primary text-obsidian text-sm font-bold tracking-tight hover:scale-105 transition-transform neon-glow">
                  <span>Launch App</span>
                </button>
              </Link>
            </div>
            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <span className="material-symbols-outlined text-white">menu</span>
            </div>
          </header>
        </div>
        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 lg:px-40 py-12">
          <div className="max-w-[960px] w-full text-center flex flex-col items-center gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now in Spatial Beta
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.04em]">
              Master the Logic, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Not Just the Syntax</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-normal leading-relaxed max-w-[700px]">
              Experience Data Structures in high-fidelity 60FPS. Navigate the spatial landscape of algorithmic complexity in a cinematic virtual workspace.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <Link href="/visualizer/array/two-sum">
                <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-transparent border-2 border-primary text-primary text-base font-black tracking-wide hover:bg-primary hover:text-obsidian transition-all neon-glow">
                  Launch AlgoSphere
                </button>
              </Link>
              <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors py-3 px-6">
                <span className="material-symbols-outlined">play_circle</span>
                <span className="font-bold">Watch Trailer</span>
              </button>
            </div>
          </div>
          {/* Feature Section (Glassmorphic Cards) */}
          <div className="mt-24 w-full max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="glass-card bg-glass p-8 rounded-xl flex flex-col gap-4 group hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">view_in_ar</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold">Spatial Visualization</h3>
                  <p className="text-white/50 text-sm leading-relaxed">See the memory heap in 3D. Inspect object references as physical bridges in a virtual architecture.</p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="glass-card bg-glass p-8 rounded-xl flex flex-col gap-4 group hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">speed</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold">60FPS Execution</h3>
                  <p className="text-white/50 text-sm leading-relaxed">Butter-smooth step-through debugging. Watch your algorithms execute with fluid, cinematic motion.</p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="glass-card bg-glass p-8 rounded-xl flex flex-col gap-4 group hover:bg-white/5 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">gesture</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold">Interactive Nodes</h3>
                  <p className="text-white/50 text-sm leading-relaxed">Manipulate pointers and references in real-time. Drag and drop nodes to see re-linking in action.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* CTA Section */}
        <section className="px-6 lg:px-40 py-20">
          <div className="max-w-[1200px] mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-transparent p-1">
            <div className="bg-obsidian rounded-[calc(1.5rem-1px)] p-12 md:p-20 text-center flex flex-col items-center gap-8 border border-white/5">
              <h2 className="text-3xl md:text-5xl font-black text-white">Ready to explore the logic?</h2>
              <p className="text-white/60 text-lg max-w-xl">Join the next generation of algorithm explorers and visualize the complex structures of tomorrow.</p>
              <div className="flex justify-center">
                <Link href="/visualizer/array/two-sum">
                  <button className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-full h-14 px-10 bg-primary text-obsidian text-lg font-black tracking-tight hover:scale-105 transition-transform neon-glow">
                    Get Started Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="px-6 lg:px-40 py-12 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="text-primary/50">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white/50">AlgoSphere</span>
            </div>
            <div className="flex gap-8">
              <a className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-tighter" href="#">Privacy</a>
              <a className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-tighter" href="#">Terms</a>
              <a className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-tighter" href="#">Contact</a>
            </div>
            <div className="flex items-center gap-6">
              <a className="text-white/40 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </a>
              <a className="text-white/40 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-2xl">data_object</span>
              </a>
              <a className="text-white/40 hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-2xl">public</span>
              </a>
            </div>
          </div>
          <p className="text-center mt-12 text-white/20 text-[10px] uppercase tracking-[0.4em]">
            © 2024 AlgoSphere. Cinematic Spatial DSA Explorer. Engineered for the Future.
          </p>
        </footer>
      </div>
    </body>
  );
}
