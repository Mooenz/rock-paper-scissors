import { useGameStore } from '@/stores/gameStore';

type Props = {
	resultComparison: boolean | string;
};

const Result = ({ resultComparison }: Props) => {
	const resetGame = useGameStore((state) => state.resetGame);

	const handleChangeResult = () => {
		resetGame();
	};

	return (
		<div className="text-center content-center flex-col h-full animate-fade-in animate-delay-700">
			<p className="uppercase text-[3.625rem]/10 mb-7 whitespace-nowrap"> {resultComparison !== 'Draw' ? `You ${resultComparison}` : "It's a tie"}</p>
			<button className="flex items-center justify-center text-dark-text rounded-lg px-4 py-2 uppercase text-base/4 tracking-[0.16em] w-55 h-10.5 cursor-pointer bg-white hover:text-red transition-all duration-200 active:scale-95 mx-auto whitespace-nowrap" onClick={handleChangeResult}>
				Play again
			</button>
		</div>
	);
};

export default Result;
