import React from 'react';
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
            <div id='login' className='rounded'>
                <div className='form-holder'>
                    <form>
                        <table>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>Username:</td>
                                    <td><input type='text' placeholder='Enter username' required/></td>
                                </tr>
                                <tr>
                                    <td>Password:</td>
                                    <td><input type='password' placeholder='Enter password' required/></td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className='center'><p id='LoginError' className='error'>&nbsp;</p></td>
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
    }
}