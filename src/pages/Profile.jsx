import { useState } from 'react';
import { FaPen } from 'react-icons/fa';

export default function Profile({ user }) {
	const [updateInfo, setUpdateInfo] = useState(false);

	function toggleMode() {
		setUpdateInfo(!updateInfo);
	}
	return (
		<div className='w-full relative'>
			<section className='flex w-full h-12 justify-center items-center bg-secondary-content'>
				<h2 className='text-2xl font-extrabold text-secondary'>
					Personal Details
				</h2>
			</section>
			<form className='w-full flex flex-col items-center'>
				{updateInfo ? (
					<button className='text-accent font-bold text-lg' type='submit'>
						Save Changes
					</button>
				) : (
					<span
						className='flex justify-evenly items-center w-1/12 cursor-pointer ml-5 text-accent text-lg font-bold'
						onClick={toggleMode}>
						<FaPen className='text-lg text-accent' /> <p>Edit</p>
					</span>
				)}
				<section className='relative w-full flex justify-between items-center border-2 border-b-info p-3'>
					<label className='font-bold text-xl flex w-2/3 justify-start'>
						Name:
					</label>
					<input
						className={`input justify-start w-1/3 mr-10 text-xl rounded-md  ${
							updateInfo ? 'input-primary' : 'input-ghost'
						}`}
						type='text'
						disabled={!updateInfo}
						value={user.name}
					/>
				</section>
				<section className='relative w-full flex justify-between items-center border-2 border-b-info p-3'>
					<label className='font-bold text-xl flex w-2/3 justify-start'>
						Email:
					</label>
					<input
						className={`input justify-start w-1/3 mr-10 text-xl rounded-md  ${
							updateInfo ? 'input-primary' : 'input-ghost'
						}`}
						type='text'
						disabled={!updateInfo}
						value={user.email}
					/>
				</section>
			</form>
		</div>
	);
}
