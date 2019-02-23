import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NavComponent } from './components/nav/nav.component';
import { SplashPageComponent } from './components/splashPage/splashPage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/editProfile/editProfile.component';
import { DeleteProfileComponent } from './components/deleteProfile/deleteProfile.component';
import { SearchProfilesComponent } from './components/searchProfiles/searchProfiles.component';
import { RankProfilesComponent } from './components/rankProfiles/rankProfiles.component';
import { SubmitExerciseComponent } from './components/submitExercise/submitExercise.component';
import { AllUsersComponent } from './components/allUsers/allUsers.component';
import { EditUserComponent } from './components/editUser/editUser.component';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

interface IAppState {
  isAdmin: boolean;
  isLoggedIn: boolean;
}

class App extends React.Component<any, IAppState> {

  constructor(props) {
    super(props);
    this.state = {
      isAdmin: true,
      isLoggedIn: true
    };
  }

  render() {
    const result = (
      <Provider store={store}>
        <div id='content-holder'>
          <BrowserRouter>
            <>{/*browserRouter expect only 1 child element that contains all routes*/}
              <NavComponent {...this.state} />
              <div id='main'>
                <Switch>
                  <Route exact path='/' render={(props) => <SplashPageComponent {...props} {...this.state} />} />
                  {/* regularComponents */}
                  {
                    // Admin
                    (this.state.isAdmin) ?
                      <Switch>
                        <Route exact path='/admin/users' render={(props) => <AllUsersComponent {...props} {...this.state} />} />
                        <Route path='/admin/users/edit/:username' render={(props) => <EditUserComponent {...props} {...this.state} />} />
                        {/* these are shared between admin and users, however more options may be availible to admin */}
                        <Route path='/user/:username' render={(props) => <ProfileComponent {...props} />} />
                        {/* perhaps a button from the profile component rather than a link from the main router */}
                        <Route path='/profile/edit' render={(props) => <EditProfileComponent {...props} />} />
                        <Route path='/profile/delete' render={(props) => <DeleteProfileComponent {...props} />} />
                        {/* also functionality built into the nav, where should logic be located? */}
                        <Route path='/search' render={(props) => <SearchProfilesComponent {...props} />} />
                        {/* changed to rank */}
                        <Route path='/rankings' render={(props) => <RankProfilesComponent {...props} />} />
                        {/* maybe this works like facebook where theres a "new post" section in your feed, rather than this being its own page */}
                        <Route path='/submit' render={(props) => <SubmitExerciseComponent {...props} {...this.state} />} />
                        <Redirect to='/' />
                      </Switch>
                    :
                      // Not Admin
                      <>
                        {this.state.isLoggedIn ?
                          <Switch>
                            {/* these are shared between admin and users, however more options may be availible to admin */}
                            <Route path='/user/:username' render={(props) => <ProfileComponent {...props} />} />
                            {/* perhaps a button from the profile component rather than a link from the main router */}
                            <Route path='/profile/edit' render={(props) => <EditProfileComponent {...props} />} />
                            <Route path='/profile/delete' render={(props) => <DeleteProfileComponent {...props} />} />
                            {/* also functionality built into the nav, where should logic be located? */}
                            <Route path='/search' render={(props) => <SearchProfilesComponent {...props} />} />
                            {/* changed to rank */}
                            <Route path='/rankings' render={(props) => <RankProfilesComponent {...props} />} />
                            {/* maybe this works like facebook where theres a "new post" section in your feed, rather than this being its own page */}
                            <Route path='/submit' render={(props) => <SubmitExerciseComponent {...props} {...this.state} />} />
                            <Redirect to='/' />
                          </Switch>
                          :
                            // not logged in
                            <Redirect to='/' />
                        }
                      </>
                  }
                </Switch>
              </div>
            </>
          </BrowserRouter>
        </div>
      </Provider>
    );
    return result;
  }
}

export default App;
