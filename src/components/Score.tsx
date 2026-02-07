type Props = {
	score: number;
};

const Score = ({ score }: Props) => {
	return (
		<div className="bg-white w-18 h-20 lg:h-28.75 lg:w-37.5 rounded-[10px] flex flex-col justify-center items-center gap-2 lg:gap-3">
			<span className="text-score-text uppercase text-[0.625rem] lg:text-base/4 tracking-[0.16em] font-semibold">Score</span>
			<span className="text-dark-text text-[2.5rem]/8 lg:text-[4.125rem]/12">{score}</span>
		</div>
	);
};

export default Score;
