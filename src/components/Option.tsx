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
		<>
			<button
				className={`${option?.classPosition} ${selectedOption && !resultOption && selectedOption?.id !== option?.id ? 'animate-zoom-out' : null} ${selectedOption?.id === option?.id || resultOptionState ? 'hover:scale-100! active:scale-100! z-10! cursor-auto! lg:w-75! lg:h-75!' : null}  ${resultOptionState || selectedOption ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : ''} absolute cursor-pointer w-34 h-34 lg:w-50 lg:h-50 hover:scale-105 active:scale-95 transition-all duration-500`}
				disabled={!!selectedOption || !!resultOptionState}
				onClick={() => handleSelectedOption()}
			>
				{resultOptionState && resultComparison !== 'Draw' && elementWin === option?.name ? <div className="before:content-[''] before:absolute before:inset-0 before:animation-fade-in animation-win animate-fade-in animate-duration-300 animate-delay-500"></div> : null}

				<div className={`relative z-10 h-full w-full border-b-8 aspect-square rounded-full flex justify-center items-center ${option?.classColors} ${className ? className : ''}`}>
					<figure className="bg-white w-[75%] h-[75%] rounded-full flex justify-center items-center border-t-8 border-dark-text/20">
						<img className={`${selectedOption?.id === option?.id || resultOptionState ? 'lg:scale-160' : ''} w-10 lg:w-15 h-auto transition-all duration-300`} src={option?.optionIcon} alt="Option Icon" />
					</figure>
				</div>
			</button>
		</>
	);
};
export default Option;
