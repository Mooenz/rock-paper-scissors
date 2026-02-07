import Layout from '@/layout/Layout';
import Game from '@/sections/Game';
import Header from '@/sections/Header';
import Rules from '@/sections/Rules';

function App() {
	return (
		<div className="radial-gradient">
			<Layout>
				<Header />
				<Game />
				<Rules />
			</Layout>
		</div>
	);
}

export default App;
