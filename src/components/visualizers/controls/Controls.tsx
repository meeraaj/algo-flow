"use client";

import { useVisualizerStore } from "@/store/useVisualizerStore";
import { useEffect, useState } from "react";

export default function Controls() {
    const { isPlaying, setIsPlaying, stepForward, stepBackward, reset, speed, setSpeed } = useVisualizerStore();

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(stepForward, 2000 / speed);
        }
        return () => clearInterval(interval);
    }, [isPlaying, speed, stepForward]);

    return (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 glass rounded-full px-8 py-4 flex items-center gap-8 shadow-2xl z-40">
            <button onClick={() => { setIsPlaying(false); reset(); }} className="text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">first_page</span>
            </button>
            <button onClick={() => { setIsPlaying(false); stepBackward(); }} className="text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-primary text-background-dark flex items-center justify-center hover:scale-110 transition-transform"
            >
                <span className="material-symbols-outlined font-bold">{isPlaying ? "pause" : "play_arrow"}</span>
            </button>
            <button onClick={() => { setIsPlaying(false); stepForward(); }} className="text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <button className="text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">last_page</span>
            </button>
            <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
            <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Speed</span>
                <input
                    className="w-24 h-1 bg-white/10 rounded-full appearance-none accent-primary cursor-pointer"
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.5"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                />
            </div>
        </div>
    );
}
