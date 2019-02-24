import React from 'react';
import LoginComponent from '../login/login.component';
import { SignUpComponent } from '../signUp/signUp.component';
import { ProfileComponent } from '../profile/profile.component';
import './splash.scss';

interface ISplashPageComponentProps {
  // props
  isLoggedIn: boolean;
}

export class SplashPageComponent extends React.Component<ISplashPageComponentProps, any> {
  constructor(props) {
      super(props);
  }
  render() {
    return this.getComponent();
  }

  getComponent() {
    if (this.props.isLoggedIn) {
      return (
        <div id='Splash'>
          <ProfileComponent {...this.props}/>
        </div>
      );
    } else {
      return(
      <div id='Splash'>
        <LoginComponent {...this.props} />
        <SignUpComponent {...this.props} />
      </div>
      );
    }
  }
}