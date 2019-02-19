import React from 'react'
const logo = require('../../resources/fitness-icon.png');
//import logo from '../resources/fitness-pattern-blue.jpg' // relative path to image 
import './nav.component.scss'
import { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

interface INavComponentProps{
  isAdmin: boolean,
  isloggedIn: boolean
}
export class NavComponent extends React.Component<INavComponentProps, any> {
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

      let usersFullNameElement = <></>;
      if(this.props.isloggedIn)
      {
          let usersFullNameString = `${"lastname"}, ${"firstName"}`;
          usersFullNameElement = (
              <li className="nav-item">
                  <p className="nav-link" id="usersFullName">{usersFullNameString}</p>
              </li>
          )
      }

        let logoutOrLoginElement = (
            <li className="nav-item">
                <Link to="/login" className="nav-link" id="usersFullName">login</Link>
            </li>
        );
        if(this.props.isloggedIn)
        {
            logoutOrLoginElement = (
                <li className="nav-item">
                    <Link to="/logout" className="nav-link" href="#">Log out</Link>
                </li>
            )
        }
        
        let managerialElement = <></>;
        if(this.props.isAdmin && this.props.isloggedIn)
        {
            managerialElement = (
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Manage
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/users/manage" className="dropdown-item" href="#">Modify User Access</Link>
                        <Link to="/reimbursements/manage" className="dropdown-item" href="#">edit activities</Link>
                        <div className="dropdown-divider"></div>
                    </div>
                </li>
            )
        }
        
        let userElement = <></>;
        if(this.props.isloggedIn)
        {
            userElement = (
                <>
                    <li className="nav-item">
                        <Link to="/users/lastname_firstname" className="nav-link" href="#">My Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reimbursements/lastname_firstname" className="nav-link" href="#">My friends</Link>
                    </li>
                </>
            )
        }
        
        let result = (
            <div id="nav">
                <a href="revature.com"><img id="nav-logo" src={logo} /></a>
                <div id="nav-items">
                    <ul className="nav justify-content-end">
                        {usersFullNameElement}
                        {managerialElement}
                        {userElement}
                        {logoutOrLoginElement}
                    </ul>
                </div>
            </div>
        );
        return result;
    }
}