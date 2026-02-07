import evaluateOptions from '@/hooks/useEvaluateOptions';
import type { TypeOptions } from '@/types/typeOptions';

const generateRandomID = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const useRandomPicked = () => {
	const options = evaluateOptions();
	// const options = gameMode ? dataOptions : [...dataOptions, ...dataOptionsBonus];

	const getRandomPicked = (): TypeOptions => {
		const lengthOptions = options.length - 1;
		const randomPickedID = generateRandomID(0, lengthOptions);
		return options[randomPickedID];
	};

	return getRandomPicked;
};

export default useRandomPicked;
