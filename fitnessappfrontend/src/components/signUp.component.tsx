import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

interface ISignUpComponentProps{
  //Props here
}
export class SignUpComponent extends React.Component<ISignUpComponentProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            //initialize here
        }
    }

    render() {
        return this.getComponent();
    }

    getComponent() {   
        //username
        //password
        //name
        //email 
        let result = (
            <div id="SignUp">
                <div className="form-holder">
                    <form>
                        <table>
                            <thead>

                            </thead>
                            <tbody>
                                {/* entryStates: empty, invalid, valid */}
                                <tr>
                                    <td>nickname</td>
                                    <td><input type="text" placeholder="Enter nickname" value={''} /></td>
                                </tr>
                                <tr>
                                    <td>email</td>
                                    <td><input type="text" placeholder="Enter password" value={''} /></td>
                                </tr>
                                {/* username states: emptyUsername, usernameIsTaken, usernameHasInvalidCharacters, usernameIsValid */}
                                <tr>
                                    <td>usename</td>
                                    <td><input type="text" placeholder="Enter username" value={''} /></td>
                                </tr>
                                <tr>
                                    <td>password</td>
                                    <td><input type="text" placeholder="Enter password" value={''} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
        return result;
        //if the user is signed in and they submit the sign up form, log them out
    }
}