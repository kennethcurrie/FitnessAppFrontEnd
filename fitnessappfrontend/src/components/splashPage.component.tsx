import React from 'react';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signUp.component';
import { ProfileComponent } from './profile.component';

interface ISplashPageComponentProps{
  //props
}

export class SplashPageComponent extends React.Component<ISplashPageComponentProps, any> {
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
    if(this.state.isloggedIn){
      return (
        <div id="Splash">
          <ProfileComponent {...this.props}/>
        </div>
      );
    }else{
      return(
      <div id="Splash">
        <LoginComponent {...this.props} />
        <SignUpComponent {...this.props} />
      </div>
      );
    }
  }
}