import OptionsMenu from './custom/OptionsMenu';

export default function Budget({ budget }) {
	const catSplit = budget.category.split(': ');

	return (
		<section className='flex flex-col items-center w-7/12 m-8 bg-base-100 rounded border-2 border-secondary pb-2'>
			<h3 className='w-full relative bg-secondary text-neutral-content pl-2 flex justify-center font-bold text-lg'>
				<span className='text-secondary-content'>{catSplit[0]}:</span>&nbsp;
				{catSplit[1]}
			</h3>

			<section className='flex justify-between w-full'>
				<section className='w-1/3 flex items-center text-lg font-bold p-3'>
					${budget.amountSpent} / ${budget.amount}
				</section>

				<OptionsMenu budget={budget} />
			</section>

			<progress
				className='progress progress-primary w-11/12 h-3 border-2 border-primary'
				value={budget.amountSpent}
				max={budget.amount}></progress>
		</section>
	);
}
