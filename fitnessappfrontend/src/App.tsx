import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavComponent } from './components/nav.component';
import { EmptyComponent } from './components/empty.component';

class App extends React.Component<any, any> {
  render() {
    let isAdmin = true;
    
    if(!this.checkIsLoggedIn())
    {
      return <Route exact path="/"/>//return logInComponent       
    }
    else
    {
      return (
        <div className="App">
        <EmptyComponent />
          <BrowserRouter>
            <NavComponent isAdmin={true}/>
            <Switch>
              {
                (isAdmin)?
                  <>
                    {/* adminComponents */}
                    <Route path="/admin/users"/>
                    <Route path="/admin/users/edit"/>
                  </>
                :
                  <EmptyComponent />              
              }

              {/* <>regularComponents</> */}
              <Route exact path="/"/>
              <Route path="/logout"/>
              <Route path="/profile/:username"/>
              <Route path="/profile/edit"/>
              <Route path="/profile/delete"/>
              <Route path="/profile/search"/>
              <Route path="/profile/rankings"/>
              <Route path="/exercise/submit"/>
            </Switch>  
          </BrowserRouter>
        </div>
      );
    }
  }

  checkIsLoggedIn(): boolean
  {
    return true;
    //if not logged in, redirect to login screen
  }
}

export default App;
