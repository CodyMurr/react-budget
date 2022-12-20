import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function OptionsMenu(props) {
	return (
		<div className='dropdown'>
			<label tabIndex={0} className='btn btn-ghost m-1'>
				<FaEllipsisV size={20} />
			</label>
			<ul
				tabIndex={0}
				className='dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52'>
				<li>
					<Link
						className='text-primary font-semibold'
						to={`/budgets/${props.budget._id}`}>
						&nbsp;Edit Budget
					</Link>
				</li>
				<li>
					<Link className='text-primary font-semibold'>View Transactions</Link>
				</li>
				<li>
					<Link
						className='text-primary font-semibold'
						to={`/budgets/${props.budget._id}/transactions/new`}>
						Add Transaction
					</Link>
				</li>
			</ul>
		</div>
	);
}
