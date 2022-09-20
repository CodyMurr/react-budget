import { Component } from 'react';
import { signUp } from '../utilities/users-service';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default class SignUpForm extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confirm: '',
		error: '',
	};

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value,
			error: '',
		});
	};

	handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			const formData = { ...this.state };
			delete formData.confirm;
			delete formData.error;
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await signUp(formData);
			// Baby step
			this.props.setUser(user);
		} catch {
			// An error happened on the server
			this.setState({ error: 'Sign Up Failed - Try Again' });
		}
	};

	// We must override the render method
	// The render method is the equivalent to a function-based component
	// (its job is to return the UI)
	render() {
		const disable = this.state.password !== this.state.confirm;
		return (
			<>
				<div className='w-full flex flex-col items-center justify-center h-full'>
					<h2 className='text-3xl font-bold'>Register Account</h2>
					<form
						className='w-1/2 relative'
						autoComplete='off'
						onSubmit={this.handleSubmit}>
						<label className='flex flex-col text-xl relative'>
							Name
							<input
								className='input input-bordered rounded-lg input-info'
								type='text'
								name='name'
								value={this.state.name}
								onChange={this.handleChange}
								required
							/>
						</label>

						<label className='flex flex-col text-xl relative'>
							Email
							<input
								className='input input-bordered rounded-lg input-info'
								type='text'
								name='email'
								value={this.state.email}
								onChange={this.handleChange}
								required
							/>
						</label>

						<label className='flex flex-col text-xl relative'>
							Password
							<input
								className='input input-bordered rounded-lg input-info'
								type={this.props.showPassword ? 'text' : 'password'}
								name='password'
								value={this.state.password}
								onChange={this.handleChange}
								required
							/>
							{this.props.showPassword ? (
								<FaEyeSlash
									size={25}
									className='absolute right-5 top-10 text-info'
									onClick={this.props.togglePw}
								/>
							) : (
								<FaEye
									size={25}
									className='absolute right-5 top-10 text-neutral'
									onClick={this.props.togglePw}
								/>
							)}
						</label>

						<label className='flex flex-col text-xl relative'>
							Confirm
							<input
								className='input input-bordered rounded-lg input-info'
								type={this.props.showPassword ? 'text' : 'password'}
								name='confirm'
								value={this.state.confirm}
								onChange={this.handleChange}
								required
							/>
						</label>

						<section className='flex flex-col items-center justify-evenly mt-4'>
							<button
								className='btn btn-secondary text-lg w-full'
								type='submit'
								disabled={disable}>
								Sign Up
							</button>
							<span className='divider'>OR</span>
							<button
								className='btn btn-primary text-lg w-full'
								type='button'
								onClick={this.props.toggleLogin}>
								Log In
							</button>
						</section>
					</form>
				</div>
				<p className='error-message'>&nbsp;{this.state.error}</p>
			</>
		);
	}
}
