import { useState, useContext } from 'react';
import { FaPen } from 'react-icons/fa';
import UserContext from '../context/User/UserContext';

export default function Profile() {
	const { user } = useContext(UserContext);
	const [updateInfo, setUpdateInfo] = useState(false);

	function toggleMode() {
		setUpdateInfo(!updateInfo);
	}
	return (
		<div className='w-full flex flex-col items-center relative'>
			<section className='flex w-full h-12 justify-center items-center bg-secondary-content'>
				<h2 className='text-2xl font-extrabold text-secondary'>
					Personal Details
				</h2>
			</section>
			<form className='w-10/12 h-4/6 flex flex-col items-center mt-5'>
				{updateInfo ? (
					<span className='flex flex-col w-full'>
						<button className='text-accent font-bold text-lg' type='submit'>
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
						className='flex justify-evenly items-center w-1/12 cursor-pointer ml-5 text-accent text-lg font-bold'
						onClick={toggleMode}>
						<FaPen className='text-lg text-accent' /> <p>Edit</p>
					</span>
				)}
				<section className='relative w-3/4 my-5 flex justify-between items-center border-2 border-b-info p-3'>
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
				<section className='relative w-3/4 my-5 flex justify-between items-center border-2 border-b-info p-3'>
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
