import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function PasswordToggle(props) {
	return (
		<section
			className='flex w-full justify-start text-lg cursor-pointer'
			onClick={props.togglePassword}>
			{props.showPassword ? (
				<FaEyeSlash size={25} className='text-neutral mr-2' />
			) : (
				<FaEye size={25} className='text-success mr-2' />
			)}
			<p
				className={`ml-2 font-bold ${
					props.showPassword ? 'text-neutral' : 'text-success'
				}`}>
				Show Password
			</p>
		</section>
	);
}
