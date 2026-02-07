import { useMemo } from 'react';
import { useGameStore } from '@/stores/gameStore';
import dataOptions from '@/content/dataOptions';
import dataOptionsBonus from '@/content/dataOptionsBonus';

const useGameOptions = () => {
	const selectedGameMode = useGameStore((state) => state.selectedGameMode);

	const options = useMemo(() => {
		if (selectedGameMode) {
			return [...dataOptions, ...dataOptionsBonus];
		}

		return dataOptions;
	}, [selectedGameMode]);

	return options;
};

export default useGameOptions;
