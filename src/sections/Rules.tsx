import { useState } from 'react';
import imgRules from '@/assets/image-rules.svg';
import imgRulesBonus from '@/assets/image-rules-bonus.svg';
import iconClose from '@/assets/icon-close.svg';
import ChangeModeGame from '@/components/ChangeModeGame';

const Rules = () => {
	const [selectedGameMode] = useState(true);

	const imgToShow = selectedGameMode ? imgRules : imgRulesBonus;

	return (
		<section className='flex items-center justify-center lg:justify-end gap-6'>
			<ChangeModeGame />

			<label htmlFor="my-modal" className="flex items-center justify-center border-2 border-white rounded-lg px-4 py-2 uppercase text-base/4 tracking-[0.16em] w-32.5 h-10.5 cursor-pointer hover:bg-white hover:text-dark-text transition-all duration-200 active:scale-95 ">
				Rules
			</label>

			<input type="checkbox" id="my-modal" className="peer hidden" />

			<label htmlFor="my-modal" className="fixed inset-0 z-10 bg-black bg-opacity-50 opacity-0 pointer-events-none transition-opacity duration-300 peer-checked:opacity-75 peer-checked:pointer-events-auto"></label>

			<section className="bg-white absolute flex flex-col z-100 items-center justify-center opacity-0 scale-95 pointer-events-none transition-all duration-300 peer-checked:opacity-100 peer-checked:scale-100 peer-checked:pointer-events-auto p-6 lg:p-8 md:rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-full md:max-w-100 h-full md:h-fit">
				<div className="flex justify-between items-center w-full mb-10">
					<p className="text-dark-text uppercase text-[2rem]/6 font-bold">Rules</p>
					<label htmlFor="my-modal" className="text-gray-500 hover:text-black cursor-pointer text-xl">
						<img src={iconClose} alt="Close" width="20" height="20" />
					</label>
				</div>
				<img className="flex-1 object-contain" src={imgToShow} alt="Rules" width="304" height="270" />
			</section>
		</section>
	);
};

export default Rules;
