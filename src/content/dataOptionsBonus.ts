import type { TypeOptions } from '@/types/typeOptions';
import lizardIcon from '@/assets/icon-lizard.svg';
import spockIcon from '@/assets/icon-spock.svg';

const optionsBonus: TypeOptions[] = [
	{
		id: 4,
		name: 'lizard',
		defeats: 'paper',
		classColors: 'bg-purple border-purple-b',
		classPosition: 'top-1/2 left-0 -translate-y-1/2',
		optionIcon: lizardIcon,
	},
	{
		id: 5,
		name: 'spock',
		defeats: 'scissors',
		classColors: 'bg-light-blue border-light-blue-b',
		classPosition: 'top-1/2 right-0 -translate-y-1/2',
		optionIcon: spockIcon,
	},
];

export default optionsBonus;
