import React, {Component} from 'react'
import CustomInput from '../common/Input'
import Button from '../common/Button'

class RegisterForm extends Component{
	state = {
		email: '',
		name: '',
		cmName: '',
		password: '',
		repeatPass: ''
	};

	handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		const {handleInput, handleSubmit} = this;
		const {email, cmName, name, password, repeatPass} = this.state;

		return (

			<div className="form-control">
				<form className="auth-form register">
					<CustomInput
						type='text'
						name='cmName'
						value={cmName}
						onChange={handleInput}
						label='Enter company name'
					/>
					<div className="form-row">
						<CustomInput
							type='text'
							name='email'
							value={email}
							onChange={handleInput}
							label='Enter your email'
						/>
						<CustomInput
							type='text'
							name='name'
							value={name}
							onChange={handleInput}
							label='Enter your name'
						/>
					</div>
					<div className="form-row">
						<CustomInput
							type='password'
							name='password'
							value={password}
							onChange={handleInput}
							label='Enter your password'
						/>
						<CustomInput
							type='password'
							name='repeatPass'
							value={repeatPass}
							onChange={handleInput}
							label='Repeat password'
						/>
					</div>
				</form>
				<Button
					type='contained'
					color='primary'
					handler={handleSubmit}>
					Register
				</Button>
			</div>

		)
	}
}

export default RegisterForm;