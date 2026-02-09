import { create } from 'zustand';
import { useMemo } from 'react';

type ScoreStore = {
	score: number;
	incrementScore: () => void;
	resetScore: () => void;
	loadScore: () => void;
};

const STORAGE_KEY = 'rockPaperScissors_score';

const getInitialScore = (): number => {
	if (typeof window === 'undefined') return 0;
	const savedScore = localStorage.getItem(STORAGE_KEY);
	return savedScore ? parseInt(savedScore, 10) : 0;
};

export const useScoreStore = create<ScoreStore>((set) => ({
	score: getInitialScore(),
	incrementScore: () =>
		set((state) => {
			const newScore = state.score + 1;
			localStorage.setItem(STORAGE_KEY, String(newScore));
			return { score: newScore };
		}),
	resetScore: () => {
		localStorage.setItem(STORAGE_KEY, '0');
		set({ score: 0 });
	},
	loadScore: () => set({ score: getInitialScore() }),
}));

export const usePersistentScore = () => {
	const score = useScoreStore((state) => state.score);
	const loadScore = useScoreStore((state) => state.loadScore);

	return useMemo(
		() => ({
			score,
			loadScore,
		}),
		[score, loadScore],
	);
};
