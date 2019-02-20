import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

interface ILoginComponentProps {
  // Props here
}
export class LoginComponent extends React.Component<ILoginComponentProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            // initialize here
        };
    }

    render() {
        return this.getComponent();
    }

    getComponent() {
        // username
        // password
        const result = (
            <div id='login'>
                <div className='form-holder'>
                    <form>
                        <p>Username: <input type='text' placeholder='Enter username' value={''} /></p>
                        <p>Password: <input type='password' placeholder='Enter password' value={''} /></p>
                        <p><input type='submit' value='Login' /></p>
                    </form>
                </div>
            </div>
        );
        return result;
    }
}