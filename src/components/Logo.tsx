import logoAppOptionA from '@/assets/logo.svg';
import logoAppOptionB from '@/assets/logo-bonus.svg';
import { useGameStore } from '@/stores/gameStore';

const Logo = () => {
	const selectedGameMode = useGameStore((state) => state.selectedGameMode);

	const imgUsed = selectedGameMode ? logoAppOptionB : logoAppOptionA;

	return (
		<figure className="ml-2.5">
			<img className="object-contain object-center w-full h-auto max-w-20 lg:max-w-40" src={imgUsed} alt="logo" width={162} height={99} title="Logo Rock paper scissors" />
		</figure>
	);
};

export default Logo;
