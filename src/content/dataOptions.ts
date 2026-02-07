import type { TypeOptions } from '@/types/typeOptions';
import rockIcon from '@/assets/icon-rock.svg';
import paperIcon from '@/assets/icon-paper.svg';
import scissorsIcon from '@/assets/icon-scissors.svg';

const dataOptions: TypeOptions[] = [
	{
		id: 2,
		name: 'paper',
		defeats: 'rock',
		classPosition: ' top-0 left-0',
		classColors: 'bg-blue border-blue-b',
		optionIcon: paperIcon,
	},
	{
		id: 3,
		name: 'scissors',
		defeats: 'paper',
		classPosition: 'top-0 right-0',
		classColors: 'bg-primary border-primary-b',
		optionIcon: scissorsIcon,
	},
	{
		id: 1,
		name: 'rock',
		defeats: 'scissors',
		classPosition: 'bottom-0 left-1/2 -translate-x-1/2',
		classColors: 'bg-red border-red-b',
		optionIcon: rockIcon,
	},
];

export default dataOptions;
