import { useGameStore } from '@/stores/gameStore';
import Options from '@/sections/Options';
import Option from '@/components/Option';
import Result from '@/components/Result';

const Game = () => {
	const selectedOption = useGameStore((state) => state.selectedOption);
	const housePickedOption = useGameStore((state) => state.housePickedOption);
	const resultOption = useGameStore((state) => state.showResult);

	return (
		<section className={`flex-1 flex items-center justify-center my-8 lg:my-15 w-full mx-auto ${resultOption ? 'max-w-310' : 'max-w-200'} transition-all duration-500`}>
			<div className={`${selectedOption ? 'gap-y-15 md:gap-y-0' : ''} grid grid-cols-2 md:flex md:items-center justify-center transition-all duration-300 w-full`}>
				<Options />

				<Result />

				<div className={`${selectedOption ? 'relative flex items-end lg:items-start justify-center flex-1 opacity-100 w-full transition-all duration-500 delay-500' : 'flex-0 opacity-0 w-0'} min-h-70 lg:min-h-107.5 order-2 md:order-3`}>
					{selectedOption && <h2 className="uppercase text-base lg:text-[25px]/5 animate-fade-in text-white whitespace-nowrap text-center tracking-[0.2em]">The house picked</h2>}
					{resultOption ? <Option option={housePickedOption} resultOption={true} className="animate-fade-in pointer-events-none" /> : <div className="animate-pulse animate-duration-1000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-text/20 rounded-full aspect-square w-34 h-34 lg:w-50 lg:h-50 mx-auto pointer-events-none"></div>}
				</div>
			</div>
		</section>
	);
};

export default Game;
