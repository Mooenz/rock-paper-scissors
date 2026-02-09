import { useEffect } from 'react';
import { useScoreStore } from '@/stores/scoreStore';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	const loadScore = useScoreStore((state) => state.loadScore);

	useEffect(() => {
		loadScore();
	}, [loadScore]);

	return <main className="w-full flex flex-col px-3 p-7.5 md:px-7.5 lg:p-11.5 min-h-dvh overflow-hidden">{children}</main>;
};

export default Layout;
