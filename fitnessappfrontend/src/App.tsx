import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NavComponent } from './components/nav/nav.component';
import { SplashPageComponent } from './components/splashPage/splashPage.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/editProfile/editProfile.component';
import { DeleteProfileComponent } from './components/deleteProfile/deleteProfile.component';
import { SearchProfilesComponent } from './components/searchProfiles/searchProfiles.component';
import { RankProfilesComponent } from './components/rankProfiles/rankProfiles.component';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';

interface IAppState {
  isAdmin: boolean;
  isLoggedIn: boolean;
}

class App extends React.Component<any, IAppState> {

  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      isLoggedIn: true
    };
  }

  render() {
    const result = (
      <div id='content-holder'>
        <BrowserRouter>
          <>{/*browserRouter expect only 1 child element that contains all routes*/}
            <NavComponent {...this.state}/>
            <div id='main'>
            <Switch>
                <Route exact path='/' render={(props) => <SplashPageComponent {...props} {...this.state} />}/>
                {/* regularComponents */}
                {
                  (this.state.isLoggedIn) ?
                    <>
                      <Route path='/logout' render={(props) => <LogoutComponent {...props}/>}/>
                      {/* these are shared between admin and users, however more options may be availible to admin */}
                      <Route path='/user/:username' render={(props) => <ProfileComponent {...props}/>}/>
                      {/* perhaps a button from the profile component rather than a link from the main router */}
                      <Route path='/profile/edit' render={(props) => <EditProfileComponent {...props}/>}/>
                      <Route path='/profile/delete'  render={(props) => <DeleteProfileComponent {...props}/>}/>
                      {/* also functionality built into the nav, where should logic be located? */}
                      <Route path='/search' render={(props) => <SearchProfilesComponent {...props}/>}/>
                      {/* changed to rank */}
                      <Route path='/rankings' render={(props) => <RankProfilesComponent {...props}/>}/>
                      {/* maybe this works like facebook where theres a "new post" section in your feed, rather than this being its own page */}
                      <Route path='/submit' render={(props) => <SplashPageComponent {...props} {...this.state}/>}/>
                    </>
                  :
                    undefined
                }

                {/* adminComponents */}
                {
                  (this.state.isLoggedIn && this.state.isAdmin) ?
                    <>
                      <Route path='/admin/users' render={(props) => <SplashPageComponent {...props} {...this.state}/>}/>
                      {/*probably not its own page, this is just routes to profile component with isAdmin set to true */}
                      {/* perhaps a button from the allUsers component rather than a link from the main router */}
                      <Route path='/admin/users/edit/:username' render={(props) => <SplashPageComponent {...props} {...this.state}/>}/>
                    </>
                  :
                  undefined
                }

                {/* if none of the url paths match, redirect to pageNotFound */}
                <Route render={(props) => <PageNotFoundComponent {...props}/>}/>
            </Switch>
            </div>
          </>
        </BrowserRouter>
      </div>
    );
    return result;
  }
}

export default App;
