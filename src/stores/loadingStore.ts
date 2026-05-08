import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
  isTransitionFinished: boolean;
  progress: number;
  hasLoaded: boolean;
  setLoading: (isLoading: boolean) => void;
  setTransitionFinished: (isFinished: boolean) => void;
  setProgress: (progress: number) => void;
  complete: () => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: true,
  isTransitionFinished: false,
  progress: 0,
  hasLoaded: false,
  setLoading: (isLoading) => set({ isLoading }),
  setTransitionFinished: (isTransitionFinished) => set({ isTransitionFinished }),
  setProgress: (progress) => set({ progress }),
  complete: () => set({ isLoading: false, progress: 100, hasLoaded: true }),
}));
