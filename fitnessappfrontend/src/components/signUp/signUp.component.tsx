import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

interface ISignUpComponentProps {
    // initialize here
}
export class SignUpComponent extends React.Component<ISignUpComponentProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            username: '',
            password: ''
        };
    }

    render() {
        return this.getComponent();
    }

    getComponent() {
        const result = (
            <div id='SignUp' className='rounded'>
                <div className='form-holder'>
                    <form>
                        <table>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full Name</td>
                                    <td><input type='text' placeholder='John Smith' required/></td>
                                </tr>
                                <tr>
                                    <td>Email Address</td>
                                    <td><input type='email' placeholder='jsmith@gmail.com' required/></td>
                                </tr>
                                {/* username states: emptyUsername, usernameIsTaken, usernameHasInvalidCharacters, usernameIsValid */}
                                <tr>
                                    <td>Username</td>
                                    <td><input type='text' placeholder='Username' required/></td>
                                </tr>
                                <tr>
                                    <td>password</td>
                                    <td><input type='password' placeholder='Password' required/></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='center'><p id='RegisterError' className='error'>&nbsp;</p></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='center'><input type='submit' value='Register'/></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
        return result;
        // if the user is signed in and they submit the sign up form, log them out
    }
}