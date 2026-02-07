import { useGameStore } from '@/stores/gameStore';


const Result = () => {
	const resetGame = useGameStore((state) => state.resetGame);
	const resultComparison = useGameStore((state) => state.resultComparison);
	const resultOption = useGameStore((state) => state.showResult);

	const handleChangeResult = () => {
		resetGame();
	};

	return (
		<div className={`${resultOption ? 'flex-0 opacity-100 w-full transition-all duration-500 delay-700 col-span-2' : ' flex-0 opacity-0 w-0 col-span-1'} mb-6 md:mb-0 order-3 md:order-2`}>
			<div className="text-center content-center flex-col h-full animate-fade-in animate-delay-700">
				<p className="uppercase text-[3.625rem]/10 mb-7 whitespace-nowrap"> {resultComparison !== 'Draw' ? `You ${resultComparison}` : "It's a tie"}</p>
				<button className="flex items-center justify-center text-dark-text rounded-lg px-4 py-2 uppercase text-base/4 tracking-[0.16em] w-55 h-10.5 cursor-pointer bg-white hover:text-red transition-all duration-200 active:scale-95 mx-auto whitespace-nowrap" onClick={handleChangeResult}>
					Play again
				</button>
			</div>
		</div>
	);
};

export default Result;
