import React from 'react';
import LoginComponent from '../login/login.component';
import { SignUpComponent } from '../signUp/signUp.component';
import { ProfileComponent } from '../profile/profile.component';
import './splash.scss';
import { IState, IApp } from '../../redux/interfaces';
import { connect } from 'react-redux';

interface ISplashPageComponentProps {
  app: IApp;
}

export class SplashPageComponent extends React.Component<ISplashPageComponentProps, any> {
  constructor(props) {
      super(props);
  }
  render() {
    return this.getComponent();
  }

  getComponent() {
    const { isLoggedIn } = this.props.app;
    if (isLoggedIn) {
      return (
        <div id='Splash'>
          <ProfileComponent {...this.props}/>
        </div>
      );
    } else {
      return (
      <div id='Splash'>
        <LoginComponent />
        <SignUpComponent {...this.props} />
      </div>
      );
    }
  }
}

const mapStateToProps = (state: IState) => {
  return { app: state.app };
};

export default connect(mapStateToProps)(SplashPageComponent);