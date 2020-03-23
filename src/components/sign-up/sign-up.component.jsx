import React from 'react';
import './sign-up.styles.scss';

// Redux.
import { connect } from 'react-redux';
import { singUpStart } from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';


class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword:''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert("Password don't match");
            return;
        }
        const { singUpStart } = this.props;
        singUpStart({displayName, email, password});
    }

    handleChange = event => {
        const {name, value} = event.target;

        // Dynamically set the properties.
        this.setState({
            [name]:value
        });
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h1 className='title'>I do have an account</h1>
                <span>Sign up with your email and password.</span>
            
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text' 
                        name='displayName'
                        value= {displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />  

                    <FormInput 
                        type='email' 
                        name='email'
                        value= {email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />  

                    <FormInput 
                        type='password' 
                        name='password'
                        value= {password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    /> 
                    
                    <FormInput 
                        type='password' 
                        name='confirmPassword'
                        value= {confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    /> 

                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    singUpStart: userCredentials => dispatch(singUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);