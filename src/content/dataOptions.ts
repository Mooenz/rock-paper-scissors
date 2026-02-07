import type { TypeOptions } from '@/types/typeOptions';
import rockIcon from '@/assets/icon-rock.svg';
import paperIcon from '@/assets/icon-paper.svg';
import scissorsIcon from '@/assets/icon-scissors.svg';

const dataOptions: TypeOptions[] = [
	{
		id: 2,
		name: 'paper',
		defeats: ['rock', 'spock'],
		classColors: 'bg-blue border-blue-b',
		optionIcon: paperIcon,
	},
	{
		id: 3,
		name: 'scissors',
		defeats: ['paper', 'lizard'],
		classColors: 'bg-primary border-primary-b',
		optionIcon: scissorsIcon,
	},
	{
		id: 1,
		name: 'rock',
		defeats: ['scissors', 'lizard'],
		classColors: 'bg-red border-red-b',
		optionIcon: rockIcon,
	},
];

export default dataOptions;
