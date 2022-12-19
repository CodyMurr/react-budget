import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function PasswordToggle(props) {
	return (
		<section
			className='flex w-full h-1/5 justify-start items-center text-lg cursor-pointer'
			onClick={props.togglePassword}>
			{props.showPassword ? (
				<>
					<FaEye size={25} className='text-accent-content' />
					<p className='ml-2 font-bold text-accent-content'>Hide Password</p>
				</>
			) : (
				<>
					<FaEyeSlash size={25} className='text-accent-content' />
					<p className='ml-2 font-bold text-accent-content'>Show Password</p>
				</>
			)}
		</section>
	);
}
