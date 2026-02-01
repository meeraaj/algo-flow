import { create } from 'zustand';

export interface VisualizerState {
    // Playback Control
    isPlaying: boolean;
    playbackSpeed: number;
    currentStep: number;
    steps: any[]; // The sequence of states to animate
    activeLine: number;

    // Data Structure State
    // We use a generic 'data' field, but for Arrays it will be number[] or object[]
    data: any;
    pointers: Record<string, number | string | null>; // e.g. { "left": 0, "right": 5, "current": 2 }

    // Actions
    togglePlay: () => void;
    setSpeed: (speed: number) => void;
    nextStep: () => void;
    prevStep: () => void;
    reset: () => void;
    setData: (data: any) => void;
    setPointers: (pointers: Record<string, number | string | null>) => void;
    loadAlgorithm: (steps: any[]) => void;
}

export const useVisualizerStore = create<VisualizerState>((set, get) => ({
    isPlaying: false,
    playbackSpeed: 1,
    currentStep: 0,
    steps: [],
    activeLine: 0,
    data: [],
    pointers: {},

    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
    setSpeed: (speed) => set({ playbackSpeed: speed }),

    nextStep: () => {
        const { currentStep, steps } = get();
        if (currentStep < steps.length - 1) {
            const next = steps[currentStep + 1];
            set({
                currentStep: currentStep + 1,
                activeLine: next.line,
                data: next.data || get().data,
                pointers: next.pointers || get().pointers
            });
        } else {
            set({ isPlaying: false });
        }
    },

    prevStep: () => {
        const { currentStep, steps } = get();
        if (currentStep > 0) {
            const prev = steps[currentStep - 1];
            set({
                currentStep: currentStep - 1,
                activeLine: prev.line,
                data: prev.data || get().data,
                pointers: prev.pointers || get().pointers
            });
        }
    },

    reset: () => set({ currentStep: 0, isPlaying: false, activeLine: 0 }),
    setData: (data) => set({ data }),
    setPointers: (pointers) => set({ pointers }),

    loadAlgorithm: (steps) => {
        set({ steps, currentStep: 0, isPlaying: false });
        // Initialize with first step
        if (steps.length > 0) {
            set({
                activeLine: steps[0].line,
                data: steps[0].data,
                pointers: steps[0].pointers
            });
        }
    }
}));
