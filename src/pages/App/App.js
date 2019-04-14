import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import SignupPage from '../SignUpPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import Explore from '../Explore/Explore'
import {getEvents} from '../../utils/tm-api';


class App extends Component {
  constructor(){ 
    super()
    this.state = {user: null, events: []};
  }


  getEvent = (idx) => { 
    return this.state.events[idx];
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
    const events = await getEvents();
    console.log(events);
    this.setState({ user});
  }


  render() {
    return (
      <div>
         <Link to='/'><header className='header-footer' style={{backgroundColor: '#004b77', margin: '0'}}>Get It Here</header></Link>
         <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
         />
        <Switch>
            <Route exact path='/signup' render={({ history }) => 
              <SignupPage style={{backgroundColor: '#004b77', margin: '0'}}
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>  
         <Route exact path='/login' render={() => 
            <LoginPage
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>  
          <div>
            <Route exact path='/explore' render={(props) =>
              <Explore
                {...props}
              />
            }/>
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;