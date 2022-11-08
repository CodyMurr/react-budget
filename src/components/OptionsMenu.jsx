import React from 'react';
import OptionsMenuItem from './OptionsMenuItem';
import { FaPen, FaPlus, FaTrashAlt } from 'react-icons/fa';

export default function OptionsMenu() {
	return (
		<>
			<ul
				tabIndex={0}
				className='dropdown-content menu w-52 p-2 bg-neutral-content rounded-box'>
				<OptionsMenuItem>
					<p>
						<FaPen size={15} />
						&nbsp;&nbsp; Edit
					</p>
				</OptionsMenuItem>
				<OptionsMenuItem>
					<p>
						<FaPlus size={15} />
						&nbsp;&nbsp; Add Expense
					</p>
				</OptionsMenuItem>
				<OptionsMenuItem>
					<p>
						<FaTrashAlt size={15} />
						&nbsp;&nbsp; Delete
					</p>
				</OptionsMenuItem>
			</ul>
		</>
	);
}
