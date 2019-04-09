import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignUpPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';


class App extends Component {
  constructor(){ 
    super()
    this.state = {user: null};
  }

  /*--- Callback Methods ---*/
  handleLogout = () => { 
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => { 
    this.setState({user: userService.getUser()});
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    const user = userService.getUser();
    this.setState({ user });
  }


  render() {
    return (
      <div>
         <header className='header-footer'>Get It Here</header>
         <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
         />
        <Switch>
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>  
         <Route exact path='/login' render={() => 
            <LoginPage
            {...this.props}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>  
        </Switch>
      </div>
    );
  }
}

export default App;
