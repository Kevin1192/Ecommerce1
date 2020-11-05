import React from 'react';

import './auth.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/signup/signup.component';

const AuthPage = () => (
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default AuthPage;