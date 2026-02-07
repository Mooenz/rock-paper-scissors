import type { TypeOptions } from '@/types/typeOptions';
import { useGameStore } from '@/stores/gameStore';

const useEvaluatePicks = () => {
	const setElementWin = useGameStore((state) => state.setElementWin);

	const evaluatePicks = (playerPick: TypeOptions, housePick: TypeOptions) => {

		if (playerPick?.defeats.includes(housePick?.name)) {
			setElementWin(playerPick.name);
			return 'Win';
		}

		if (housePick?.defeats.includes(playerPick?.name)) {
			setElementWin(housePick.name);
			return 'Lose';
		}

		setElementWin('');
		return 'Draw';
	};

	return { evaluatePicks };
};

export default useEvaluatePicks;
