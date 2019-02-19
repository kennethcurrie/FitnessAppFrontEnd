import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NavComponent } from './components/nav.component';
import { EmptyComponent } from './components/empty.component';
import { SplashPageComponent } from './components/splashPage.component';
import { LogoutComponent } from './components/logout.component';
import { ProfileComponent } from './components/profile.component';
import { EditProfileComponent } from './components/editProfile.component';
import { DeleteProfileComponent } from './components/deleteProfile.component';
import { SearchProfilesComponent } from './components/searchProfiles.component';
import { RankProfilesComponent } from './components/rankProfiles.component';

interface IAppState{
  isAdmin: boolean,
  isloggedIn: boolean
}

class App extends React.Component<any, IAppState> {

  constructor(props)
  {
    super(props)
    this.state = {
      isAdmin: false,
      isloggedIn: false
    }
  }

  render() {
    let result = (
      <div id="content-holder"> 
        <BrowserRouter>
          <>{/*browserRouter expect only 1 child element that contains all routes*/}
            {(this.state.isloggedIn === false && window.location.pathname != "/login")? <Redirect to="/login" /> : <EmptyComponent /> }
            <NavComponent isAdmin={true}/>
            <Switch>
              {
                (this.state.isAdmin)?
                  <>
                    {/* adminComponents */}
                    <Route path="/admin/users" render={(props) => <SplashPageComponent {...props}/>}/>
                    {/*probably not its own page, this is just routes to profile component with isAdmin set to true */}
                    {/* perhaps a button from the allUsers component rather than a link from the main router */}
                    <Route path="/admin/users/edit" render={(props) => <SplashPageComponent {...props}/>}/>
                  </>
                :
                  <EmptyComponent />              
              }

              {/* regularComponents */}
              {/* these are shared between admin and users, however more options may be availible to admin */}
              <Route exact path="/" render={(props) => <SplashPageComponent {...props}/>}/>
              <Route path="/logout" render={(props) => <LogoutComponent {...props}/>}/>
              <Route path="/profile/:username" render={(props) => <ProfileComponent {...props}/>}/>
              {/* perhaps a button from the profile component rather than a link from the main router */}
              <Route path="/profile/edit" render={(props) => <EditProfileComponent {...props}/>}/>
              <Route path="/profile/delete"  render={(props) => <DeleteProfileComponent {...props}/>}/>
              {/* also functionality built into the nav, where should logic be located? */}
              <Route path="/profile/search" render={(props) => <SearchProfilesComponent {...props}/>}/>
              {/* changed to rank */}
              <Route path="/profile/rank" render={(props) => <RankProfilesComponent {...props}/>}/>
              {/* maybe this works like facebook where theres a "new post" section in your feed, rather than this being its own page */}
              <Route path="/exercise/submit" render={(props) => <SplashPageComponent {...props}/>}/>
            </Switch>  
          </>
        </BrowserRouter>
      </div>
    );
    return result;
  }

}

export default App;
