import React from 'react';
const logo = require('../../resources/fitness-icon.png');
import './nav.scss';
// import logo from '../resources/fitness-pattern-blue.jpg' // relative path to image
import { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

interface INavComponentProps {
  isAdmin: boolean;
  isLoggedIn: boolean;
}

export class NavComponent extends React.Component<INavComponentProps, any> {
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
        let userElement = <></>;
        let adminElement = <></>;
        let logoutElement = <></>;

        if (this.props.isLoggedIn) {
            const usersFullNameString = `${'firstName'} ${'lastname'}`;
            userElement = (
                <>
                    <li className='nav-item'>
                        <p className='nav-link' id='usersFullName'>{usersFullNameString}</p>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/submit' className='nav-link'>Submit Workout</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/rankings' className='nav-link'>Top Ranked</Link>
                    </li>
                </>
            );
            logoutElement = (
                <li className='nav-item'>
                    <Link to='/logout' className='nav-link' href='#'>Log out</Link>
                </li>
            );
        }

        if (this.props.isLoggedIn && this.props.isAdmin ) {
            adminElement = (
                <li className='nav-item'>
                    <Link to='/admin/users' className='nav-link'>User Management</Link>
                </li>
            );
        }

        const result = (
            <div id='nav'>
                <a href='revature.com'><img id='nav-logo' src={logo} /></a>
                <div id='nav-items'>
                    <ul className='nav justify-content-end'>
                        {userElement}
                        {adminElement}
                        {logoutElement}
                    </ul>
                </div>
            </div>
        );
        return result;
    }
}