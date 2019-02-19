import React from 'react'
import './signUp.component.scss'
import { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

interface ISignUpComponentProps{
  isloggedIn: boolean
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
        let result = (
            <>

            </>
        );
        return result;
        //if the user is signed in and they submit the sign up form, log them out
    }
}