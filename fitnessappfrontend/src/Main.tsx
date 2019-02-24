import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';
import NavComponent from './components/nav/nav.component';
import { SplashPageComponent } from './components/splashPage/splashPage.component';
import { AllUsersComponent } from './components/allUsers/allUsers.component';
import { EditUserComponent } from './components/editUser/editUser.component';
import { ProfileComponent } from './components/profile/profile.alt/profile.component';
import { EditProfileComponent } from './components/editProfile/editProfile.component';
import { DeleteProfileComponent } from './components/deleteProfile/deleteProfile.component';
import { SearchProfilesComponent } from './components/searchProfiles/searchProfiles.component';
import { RankProfilesComponent } from './components/rankProfiles/rankProfiles.component';
import { SubmitExerciseComponent } from './components/submitExercise/submitExercise.component';
import { connect } from 'react-redux';
import { IState } from './redux/interfaces';

interface IAppProps {
    isAdmin: boolean;
    isLoggedIn: boolean;
}

class MainComponent extends React.Component<IAppProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='content-holder'>
                <BrowserRouter>
                    <>{/*browserRouter expect only 1 child element that contains all routes*/}
                        <NavComponent />
                        <div id='main'>
                            <Switch>
                                <Route exact path='/' component={SplashPageComponent} />
                                {/* regularComponents */}
                                {
                                    // Admin
                                    (this.props.isAdmin) ?
                                        <Switch>
                                            <Route exact path='/admin/users' component={AllUsersComponent} />
                                            <Route path='/admin/users/edit/:username' component={ EditUserComponent} />
                                            {/* these are shared between admin and users, however more options may be availible to admin */}
                                            <Route path='/user/:username' component={ProfileComponent}/>
                                            {/* perhaps a button from the profile component rather than a link from the main router */}
                                            <Route path='/profile/edit' component={EditProfileComponent} />
                                            <Route path='/profile/delete' component={DeleteProfileComponent} />
                                            {/* also functionality built into the nav, where should logic be located? */}
                                            <Route path='/search' component={SearchProfilesComponent} />
                                            {/* changed to rank */}
                                            <Route path='/rankings' component={RankProfilesComponent} />
                                            {/* maybe this works like facebook where theres a "new post" section in your feed, rather than this being its own page */}
                                            <Route path='/submit' component={SubmitExerciseComponent } />
                                            <Redirect to='/' />
                                        </Switch>
                                        :
                                        // Not Admin
                                        <>
                                            {this.props.isLoggedIn ?
                                                <Switch>
                                                    {/* these are shared between admin and users, however more options may be availible to admin */}
                                                    <Route path='/user/:username' component={ProfileComponent} />
                                                    {/* perhaps a button from the profile component rather than a link from the main router */}
                                                    <Route path='/profile/edit' component={EditProfileComponent} />
                                                    <Route path='/profile/delete' component={DeleteProfileComponent} />
                                                    {/* also functionality built into the nav, where should logic be located? */}
                                                    <Route path='/search' component={SearchProfilesComponent} />
                                                    {/* changed to rank */}
                                                    <Route path='/rankings' component={RankProfilesComponent} />
                                                    {/* maybe this works like facebook where theres a "new post" section in your feed, rather than this being its own page */}
                                                    <Route path='/submit' component={SubmitExerciseComponent} />
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
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        isLoggedIn: (state.session.user !== undefined),
        isAdmin: (state.session.user && state.session.user.role === 'admin')
    };
};

export default connect(mapStateToProps)(MainComponent);