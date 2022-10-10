import { Component } from 'react';
import { signUp } from '../utilities/users-service';
import PasswordToggle from './custom/PasswordToggle';
import FormInput from './custom/FormInput';

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
				<form
					className='w-1/2 relative'
					autoComplete='off'
					onSubmit={this.handleSubmit}>
					<FormInput
						title='Name'
						formData={this.state}
						handleChange={this.handleChange}
					/>
					<FormInput
						title='Email'
						type='email'
						formData={this.state}
						handleChange={this.handleChange}
					/>
					<FormInput
						title='Password'
						type={this.props.showPassword ? 'password' : 'text'}
						formData={this.state}
						handleChange={this.handleChange}
					/>
					<FormInput
						title='Confirm'
						type={this.props.showPassword ? 'password' : 'text'}
						formData={this.state}
						handleChange={this.handleChange}
					/>

					<PasswordToggle
						showPassword={this.props.showPassword}
						togglePassword={this.props.togglePassword}
					/>

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

					<p className='error-message'>&nbsp;{this.state.error}</p>
				</form>
			</>
		);
	}
}
