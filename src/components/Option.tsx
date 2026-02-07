import { useGameStore } from '@/stores/gameStore';
import { useScoreStore } from '@/stores/scoreStore';
import useRandomPicked from '@/hooks/useGetRandomPicked';
import useEvaluatePicks from '@/hooks/useEvaluatePicks';
import type { TypeOptions } from '@/types/typeOptions';

type Props = {
	option: TypeOptions;
	className?: string;
	resultOption?: boolean;
};

const Option = ({ option, className, resultOption = false }: Props) => {
	const resultOptionState = useGameStore((state) => state.showResult);
	const getRandomPicked = useRandomPicked();
	const incrementScore = useScoreStore((state) => state.incrementScore);
	const resultComparison = useGameStore((state) => state.resultComparison);
	const { setSelectedOption, setHousePickedOption, setResultComparison, setShowResult } = useGameStore();
	const selectedOption = useGameStore((state) => state.selectedOption);
	const { evaluatePicks } = useEvaluatePicks();
	const elementWin = useGameStore((state) => state.elementWin);
	const selectedGameMode = useGameStore((state) => state.selectedGameMode);
	const sizeButtonOption = selectedGameMode ? 'w-24 h-24 lg:w-37 lg:h-37' : 'w-34 h-34 lg:w-50 lg:h-50';
	const sizeIconOption = selectedGameMode ? 'h-8 lg:h-15' : 'h-10 lg:h-15';

	function handleSelectedOption() {
		const houseOption = getRandomPicked();
		setSelectedOption(option);
		setHousePickedOption(houseOption);
		const result = evaluatePicks(option, houseOption);
		setResultComparison(result);

		setTimeout(() => {
			if (result === 'Win') {
				incrementScore();
			}

			setShowResult(true);
		}, 2000);
	}

	return (
		<button
			className={`${selectedOption && !resultOption && selectedOption?.id !== option?.id ? 'animate-zoom-out' : null} ${selectedOption?.id === option?.id || resultOptionState ? 'hover:scale-100! active:scale-100! z-100! cursor-auto! lg:w-75! lg:h-75!' : null} ${sizeButtonOption} absolute z-10 cursor-pointer hover:scale-105 active:scale-95 transition-all duration-500`}
			disabled={!!selectedOption || !!resultOptionState}
			onClick={() => handleSelectedOption()}
			style={resultOptionState || selectedOption ? { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } : {}}
		>
			{resultOptionState && resultComparison !== 'Draw' && elementWin === option?.name ? <div className="before:content-[''] before:absolute before:inset-0 before:animation-fade-in animation-win animate-fade-in animate-duration-300 animate-delay-500"></div> : null}

			<div className={`relative z-10 h-full w-full border-b-8 aspect-square rounded-full flex justify-center items-center ${option?.classColors} ${className ? className : ''}`}>
				<figure className="bg-white w-[75%] h-[75%] rounded-full flex justify-center items-center border-t-8 border-dark-text/20">
					<img className={`${selectedOption?.id === option?.id || resultOptionState ? 'lg:scale-160' : ''} ${sizeIconOption} w-auto transition-all duration-300`} src={option?.optionIcon} alt="Option Icon" />
				</figure>
			</div>
		</button>
	);
};
export default Option;
