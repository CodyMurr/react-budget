import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import BackButton from '../components/custom/BackButton';

export default function Profile({ user }) {
	const [updateInfo, setUpdateInfo] = useState(false);

	function toggleMode() {
		setUpdateInfo(!updateInfo);
	}
	return (
		<div className='w-10/12 flex flex-col items-center relative'>
			<header className='text-primary font-extrabold w-full h-24 flex items-center justify-between p-5 border-b-2'>
				<h1 className='text-4xl'>Personal Details</h1>
			</header>
			<form className='w-10/12 h-2/6 flex flex-col items-center justify-center mt-5 bg-base-300 rounded-lg'>
				{updateInfo ? (
					<span className='flex flex-col w-full'>
						<button
							className='text-accent-content font-bold text-lg'
							type='submit'>
							Save Changes
						</button>
						<p
							className='text-error w-full text-center hover:cursor-pointer hover:underline'
							onClick={toggleMode}>
							cancel
						</p>
					</span>
				) : (
					<span
						className='flex justify-evenly items-center w-1/12 cursor-pointer ml-5 text-accent-content text-lg font-bold'
						onClick={toggleMode}>
						<FaPen /> <p>Edit</p>
					</span>
				)}
				<section className='relative w-3/4 my-5 flex justify-between items-center border-2 rounded-lg p-3'>
					<label className='font-bold text-xl flex w-2/3 justify-start'>
						Name:
					</label>
					<input
						className={`input justify-start w-1/2 mr-10 text-xl rounded-md  ${
							updateInfo ? 'input-primary' : 'input-ghost'
						}`}
						type='text'
						disabled={!updateInfo}
						value={user.name}
					/>
				</section>
				<section className='relative w-3/4 my-5 flex justify-between items-center border-2 rounded-lg p-3'>
					<label className='font-bold text-xl flex w-2/3 justify-start'>
						Email:
					</label>
					<input
						className={`input justify-start w-1/2 mr-10 text-xl rounded-md  ${
							updateInfo ? 'input-primary' : 'input-ghost'
						}`}
						type='text'
						disabled={!updateInfo}
						value={user.email}
					/>
				</section>
			</form>
			<BackButton />
		</div>
	);
}
