import { useScoreStore } from '@/stores/scoreStore';
import Logo from '@/components/Logo';
import Score from '@/components/Score';

const Header = () => {
	const score = useScoreStore((state) => state.score);

	return (
		<header className="flex items-center justify-between p-2 lg:px-5 lg:py-4 rounded-[18px] border-2 border-line shadow-[inset_0_0_0_1px_var(--color-header-outline)] outline-1 outline-header-outline min-h-25 lg:min-h-38.5 max-w-175 mx-auto w-full">
			<Logo />
			<Score score={score} />
		</header>
	);
};

export default Header;
