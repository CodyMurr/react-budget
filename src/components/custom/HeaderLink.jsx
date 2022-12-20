import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export default function HeaderLink(props) {
	return (
		<>
			<Link
				to={props.link}
				className='w-1/3 h-18 btn btn-ghost text-md text-accent flex justify-center items-center cursor-pointer mx-2'>
				<FaPlus size={20} />
				&nbsp; &nbsp;
				<p>{props.text}</p>
			</Link>
		</>
	);
}
