import type { TypeOptions } from '@/types/typeOptions';
import Option from '@/components/Option';
import { useGameStore } from '@/stores/gameStore';
import evaluateOptions from '@/hooks/useEvaluateOptions';
import imgTriangle from '@/assets/bg-triangle.svg';
import imgPentagon from '@/assets/bg-pentagon.svg';

const Options = () => {
	const selectedOption = useGameStore((state) => state.selectedOption);
	const selectedGameMode = useGameStore((state) => state.selectedGameMode);
	const bgImage = selectedGameMode ? imgPentagon : imgTriangle;
	const options = evaluateOptions();
	const distributionOptions = selectedGameMode ? 'pentagon' : 'triangle';

	return (
		<div className={`${distributionOptions} relative mx-auto flex items-end lg:items-start w-full max-w-75 flex-1 gap-x-19 gap-y-5 justify-center text-center bg-no-repeat bg-center bg-size-[80%] min-h-70 lg:min-h-107.5 order-1 ${selectedOption ? 'max-w-full! col-span-1' : `lg:max-w-119 col-span-2`} transition-[max-width] duration-500`}>
			{selectedOption && <h2 className="uppercase text-base lg:text-[25px]/5 animate-fade-in text-white text-center tracking-[0.2em]">You pick</h2>}

			{options.map((option: TypeOptions) => (
				<Option key={option.id} option={option} />
			))}

			{selectedOption ? null : <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-auto object-contain object-center animate-fade-in animate-delay-500" src={bgImage} alt="Background Image" />}
		</div>
	);
};

export default Options;
