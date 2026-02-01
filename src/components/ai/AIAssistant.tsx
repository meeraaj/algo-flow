"use client";

import { useState, useEffect } from "react";
import { clsx } from "clsx";

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [apiKey, setApiKey] = useState("");
    const [hasKey, setHasKey] = useState(false);

    useEffect(() => {
        const storedKey = localStorage.getItem("algo_ai_key");
        if (storedKey) {
            setApiKey(storedKey);
            setHasKey(true);
        }
    }, []);

    const saveKey = () => {
        localStorage.setItem("algo_ai_key", apiKey);
        setHasKey(true);
    };

    return (
        <div className={clsx("fixed bottom-8 right-8 z-50 transition-all duration-300", isOpen ? "w-96" : "w-auto")}>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 backdrop-blur-md px-4 py-3 rounded-full shadow-2xl transition-all group"
                >
                    <div className="size-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm text-background-dark font-bold">psychology</span>
                    </div>
                    <span className="text-sm font-bold text-primary pr-2">Ask AI</span>
                </button>
            )}

            {isOpen && (
                <div className="glass rounded-xl overflow-hidden shadow-2xl border border-primary/20 flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-primary/10 px-4 py-3 flex items-center justify-between border-b border-primary/20">
                        <div className="flex items-center gap-2">
                            <div className="size-6 rounded-full bg-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-xs text-background-dark font-bold">psychology</span>
                            </div>
                            <span className="text-sm font-bold text-primary">Algo-GPT Tutor</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4 bg-background-dark/90 min-h-[300px] flex flex-col">
                        {!hasKey ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                                <span className="material-symbols-outlined text-4xl text-slate-500">key</span>
                                <h3 className="text-sm font-bold text-white">Enter API Key</h3>
                                <p className="text-xs text-slate-400 px-4">
                                    To use the AI Assistant, please provide your OpenAI or Anthropic API key. It is stored locally in your browser.
                                </p>
                                <input
                                    type="password"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-primary outline-none"
                                    placeholder="sk-..."
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                />
                                <button
                                    onClick={saveKey}
                                    className="w-full bg-primary text-background-dark rounded-lg py-2 text-xs font-bold hover:bg-primary/90 transition-colors"
                                >
                                    Save Key
                                </button>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col">
                                <div className="flex-1 overflow-y-auto space-y-3 mb-4 custom-scrollbar">
                                    {/* Messages placeholder */}
                                    <div className="flex flex-col gap-1 items-start">
                                        <span className="text-[10px] text-primary font-bold ml-1">AI Tutor</span>
                                        <div className="bg-primary/10 border border-primary/10 rounded-2xl rounded-tl-none p-3 text-xs leading-relaxed text-slate-200">
                                            Hello! I see you're looking at the Linked List reversal. I can explain the pointer logic or help you debug. What's on your mind? 🧠
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        className="w-full bg-surface-dark border border-white/10 rounded-full py-2 pl-4 pr-10 text-xs focus:ring-1 focus:ring-primary focus:border-primary transition-all text-white placeholder:text-slate-500"
                                        placeholder="Ask about the pointers..."
                                        type="text"
                                    />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-sm">send</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
