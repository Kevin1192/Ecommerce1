import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = async (evt) => {
        const { name, value } = evt.target;
        await this.setState(preState => ({
            ...preState,
            [name]: value,
       }))
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        this.setState({email: '', password: ''})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange} label='email' required />
                <FormInput type='password' name='password' value={this.state.password} handleChange={this.handleChange} label='password' required />

                <div className='button'>
                <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>

                </div>
            </form>
            </div>
        )
    }
}


export default SignIn;