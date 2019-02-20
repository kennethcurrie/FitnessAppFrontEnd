import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NavComponent } from './components/nav.component';
import { EmptyComponent } from './components/empty.component';
import { SplashPageComponent } from './components/splashPage.component';
import { LogoutComponent } from './components/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/editProfile.component';
import { DeleteProfileComponent } from './components/deleteProfile.component';
import { SearchProfilesComponent } from './components/searchProfiles.component';
import { RankProfilesComponent } from './components/rankProfiles.component';
import { LoginComponent } from './components/login.component';
import { SignUpComponent } from './components/signUp.component';
import { PageNotFoundComponent } from './components/pageNotFound.component';

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
            <NavComponent {...this.state}/>
            <div id="main">
            <Switch>
              {/* temporary for testing */}
              <Route path="/test" render={(props) => <ProfileComponent {...props}/>}/>



                {/* pre-login accessible components */}
                {
                  (!this.state.isloggedIn)?
                    <>
                      {/* may rerout to signup, login, or profile */}
                      {/* <Route exact path="/" render={(props) => <SplashPageComponent {...props}/>}/> */}
                      <Route exact path="/" render={(props) => <LoginComponent {...props} />}/>
                      <Route exact path="/" render={(props) => <SignUpComponent {...props} />}/>
                    </>
                  :
                    <EmptyComponent />              
                }
                
                {/* regularComponents */}
                {
                  (this.state.isloggedIn)?
                    <>
                      <Route path="/logout" render={(props) => <LogoutComponent {...props}/>}/>
                      {/* these are shared between admin and users, however more options may be availible to admin */}
                      <Route path="/profile/:username" render={(props) => <ProfileComponent {...props}/>}/>
                      {/* perhaps a button from the profile component rather than a link from the main router */}
                      <Route path="/profile/edit" render={(props) => <EditProfileComponent {...props}/>}/>
                      <Route path="/profile/delete"  render={(props) => <DeleteProfileComponent {...props}/>}/>
                      {/* also functionality built into the nav, where should logic be located? */}
                      <Route path="/search" render={(props) => <SearchProfilesComponent {...props}/>}/>
                      {/* changed to rank */}
                      <Route path="/rankings" render={(props) => <RankProfilesComponent {...props}/>}/>
                      {/* maybe this works like facebook where theres a "new post" section in your feed, rather than this being its own page */}
                      <Route path="/submit" render={(props) => <SplashPageComponent {...props}/>}/>
                    </>
                  :
                    <EmptyComponent />              
                }
                
                {/* adminComponents */}
                {
                  (this.state.isloggedIn && this.state.isAdmin)?
                    <>
                      <Route path="/admin/users" render={(props) => <SplashPageComponent {...props}/>}/>
                      {/*probably not its own page, this is just routes to profile component with isAdmin set to true */}
                      {/* perhaps a button from the allUsers component rather than a link from the main router */}
                      <Route path="/admin/users/edit/:username" render={(props) => <SplashPageComponent {...props}/>}/>
                    </>
                  :
                    <EmptyComponent />              
                }

                {/* login gatekeeper, catch-all if not logged in */}
                {
                  (this.state.isloggedIn === false)?
                    <>
                      <Route path="/" component={SplashPageComponent}/>
                    </> 
                  : 
                    <EmptyComponent /> 
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
