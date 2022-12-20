import React from 'react';
import HeaderLink from './HeaderLink';

export default function PageHeader(props) {
	return (
		<>
			<header className='text-secondary-content font-extrabold w-full h-24 flex items-center justify-between p-5 border-b-2'>
				<h1 className='text-4xl w-1/2'>
					{props.text}
					<span className='text-primary'>{props.keyWord}</span>
				</h1>
				<div className='w-1/2 h-full flex justify-end items-center'>
					<HeaderLink link='/budgets/new' text='New Budget' />
				</div>
			</header>
		</>
	);
}
