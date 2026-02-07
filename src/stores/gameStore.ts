import { create } from 'zustand';
import type { TypeOptions } from '@/types/typeOptions';

type GameStore = {
	selectedOption: TypeOptions | null;
	housePickedOption: TypeOptions;
	resultComparison: string;
	showResult: boolean;
	selectedGameMode: boolean;
	elementWin: string;
	setSelectedOption: (option: TypeOptions | null) => void;
	setHousePickedOption: (option: TypeOptions) => void;
	setResultComparison: (result: string) => void;
	setShowResult: (show: boolean) => void;
	setSelectedGameMode: (mode: boolean) => void;
	resetGame: () => void;
	setElementWin: (element: string) => void;
};

export const useGameStore = create<GameStore>((set) => ({
	selectedOption: null,
	housePickedOption: {
		id: 0,
		name: '',
		optionIcon: '',
		classPosition: '',
		classColors: '',
		defeats: '',
	},
	resultComparison: '',
	showResult: false,
	selectedGameMode: false,
	elementWin: '',

	setSelectedOption: (option: TypeOptions | null) => set({ selectedOption: option }),
	setHousePickedOption: (option: TypeOptions) => set({ housePickedOption: option }),
	setResultComparison: (result: string) => set({ resultComparison: result }),
	setShowResult: (show: boolean) => set({ showResult: show }),
	setSelectedGameMode: (mode: boolean) => set({ selectedGameMode: mode }),
	setElementWin: (element: string) => set({ elementWin: element }),

	resetGame: () =>
		set({
			selectedOption: null,
			housePickedOption: {
				id: 0,
				name: '',
				optionIcon: '',
				classPosition: '',
				classColors: '',
				defeats: '',
			},
			resultComparison: '',
			showResult: false,
			elementWin: '',
		}),
}));
