import React, { useState } from 'react';
import './sign-up.styles.scss';

// Redux.
import { connect } from 'react-redux';
import { singUpStart } from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

const SignUp = singUpStart => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    singUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    // Dynamically set the properties.
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  return (
    <div className='sign-up'>
      <h1 className='title'>I do have an account</h1>
      <span>Sign up with your email and password.</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />

        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />

        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />

        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />

        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  singUpStart: userCredentials => dispatch(singUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
