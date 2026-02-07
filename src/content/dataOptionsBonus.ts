import type { TypeOptions } from '@/types/typeOptions';
import lizardIcon from '@/assets/icon-lizard.svg';
import spockIcon from '@/assets/icon-spock.svg';

const optionsBonus: TypeOptions[] = [
	{
		id: 4,
		name: 'lizard',
		defeats: ['paper', 'spock'],
		classColors: 'bg-purple border-purple-b',
		optionIcon: lizardIcon,
	},
	{
		id: 5,
		name: 'spock',
		defeats: ['scissors', 'rock'],
		classColors: 'bg-light-blue border-light-blue-b',
		optionIcon: spockIcon,
	},
];

export default optionsBonus;
