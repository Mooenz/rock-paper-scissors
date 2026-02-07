import { useGameStore } from '@/stores/gameStore';
import Option from '@/components/Option';
import Result from '@/components/Result';
import evaluateOptions from '@/hooks/useEvaluateOptions';
import type { TypeOptions } from '@/types/typeOptions';

const Game = () => {
	const selectedOption = useGameStore((state) => state.selectedOption);
	const resultOption = useGameStore((state) => state.showResult);
	const housePickedOption = useGameStore((state) => state.housePickedOption);
	const resultComparison = useGameStore((state) => state.resultComparison);
	const options = evaluateOptions();

	return (
		<section className={`flex-1 my-8 lg:my-15 w-full mx-auto ${resultOption ? 'max-w-310' : 'max-w-200'} transition-all duration-500`}>
			<div className={`${selectedOption ? 'gap-y-15 md:gap-y-0' : ''} grid grid-cols-2 md:flex md:items-center justify-center transition-all duration-300`}>
				<div className={`relative mx-auto flex items-end lg:items-start w-full max-w-75 flex-1 gap-x-19 gap-y-5 justify-center text-center bg-no-repeat bg-center bg-size-[80%] min-h-70 lg:min-h-107.5 order-1 ${selectedOption ? 'max-w-full! col-span-1' : "bg-[url('/src/assets/bg-triangle.svg')] lg:max-w-119 col-span-2"} transition-[max-width] duration-500`}>
					{selectedOption && <h2 className="uppercase text-base lg:text-[25px]/5 animate-fade-in text-white text-center tracking-[0.2em]">You pick</h2>}

					{options.map((option: TypeOptions) => (
						<Option key={option.id} option={option} />
					))}
				</div>

				<div className={`${resultOption ? 'flex-0 opacity-100 w-full transition-all duration-500 delay-700' : 'flex-0 opacity-0 w-0'} mb-6 md:mb-0 col-span-2 order-3 md:order-2`}>
					<Result resultComparison={resultComparison} />
				</div>

				<div className={`${selectedOption ? 'relative flex items-end lg:items-start justify-center flex-1 opacity-100 w-full transition-all duration-500 delay-500' : 'flex-0 opacity-0 w-0'} min-h-70 lg:min-h-107.5 order-2 md:order-3`}>
					{selectedOption && <h2 className="uppercase text-base lg:text-[25px]/5 animate-fade-in text-white whitespace-nowrap text-center tracking-[0.2em]">The house picked</h2>}
					{resultOption ? <Option option={housePickedOption} resultOption={true} className="animate-fade-in pointer-events-none" /> : <div className="animate-pulse animate-duration-1000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark-text/20 rounded-full aspect-square w-34 h-34 lg:w-50 lg:h-50 mx-auto pointer-events-none"></div>}
				</div>
			</div>
		</section>
	);
};

export default Game;
