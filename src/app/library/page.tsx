import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function LibraryPage() {
    return (
        <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden">
            <Navbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 flex flex-col relative overflow-y-auto p-12 items-center justify-center">
                    <div className="text-center space-y-4">
                        <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-4xl text-primary">auto_stories</span>
                        </div>
                        <h2 className="text-3xl font-black text-white">Select a Challenge</h2>
                        <p className="text-slate-400 max-w-md mx-auto text-lg">
                            Navigate through the Problem Library on the left to start visualizing algorithms.
                        </p>
                        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mt-8">
                            <div className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-left">
                                <span className="material-symbols-outlined text-primary mb-2">list</span>
                                <h3 className="font-bold text-white">Linked Lists</h3>
                                <p className="text-xs text-slate-500 mt-1">4 problems</p>
                            </div>
                            <div className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer text-left">
                                <span className="material-symbols-outlined text-primary mb-2">grid_view</span>
                                <h3 className="font-bold text-white">Arrays</h3>
                                <p className="text-xs text-slate-500 mt-1">8 problems</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
