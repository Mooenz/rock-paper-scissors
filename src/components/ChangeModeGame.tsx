import { useGameStore } from '@/stores/gameStore';

const ChangeModeGame = () => {
	const selectedGameMode = useGameStore((state) => state.selectedGameMode);
	const setSelectedGameMode = useGameStore((state) => state.setSelectedGameMode);

	const handleChangeMode = () => {
		setSelectedGameMode(!selectedGameMode);
	};

	return (
		<div className="flex items-center gap-2">
			<label className="block font-semibold cursor-pointer select-none text-xl leading-[0.3em]" htmlFor="check-mode">
				Mode bonus
			</label>

			<span className="relative h-5 w-5 border-2 border-white rounded-sm flex items-center justify-center ">
				<input className="absolute cursor-pointer opacity-0 peer" type="checkbox" name="check-mode" id="check-mode" onChange={handleChangeMode} checked={selectedGameMode} />
				<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-auto w-full h-full bg-blue transition-all duration-300 peer-checked:scale-100 peer-checked:opacity-100 scale-0 opacity-0"></span>
			</span>
		</div>
	);
};

export default ChangeModeGame;
