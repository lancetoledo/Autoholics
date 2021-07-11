import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import UserStore from './stores/UserStore';

class App extends React.Component{

  async componentDidMount(){

    try{

      // When app component mounts it will check if the user is currently logged in//
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }

      else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }

    }
  //Cache error handling//
    catch(e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }
  
 //Logout Function//
  async doLogout(){

    try{

      // When app component mounts it will check if the user is currently logged in//
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });

      let result = await res.json();
      //Logsout the user and resets the username in the user stored
      if (result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }

    }
  //Cache error handling//
    catch(e) {
      console.log(e)
    }
  }

  render (){
    
    // //TESTING Loading Page//
    // if (UserStore.loading) {
    //   return (
    //     <div className = "app">
    //       <div className = 'container'>
    //         Loading, please wait..
    //       </div>
    //     </div>

    //   );
    // }
    // //TESTING Welcome if user logs in
    // else {

    //   if (UserStore.isLoggedIn) {
    //     return (
    //       <div className = "app">
    //         <div className = 'container'>
    //           Welcome {UserStore.username}

    //           <FormButton
    //             text = {'Log Out'}
    //             disable = {false}
    //             //When you click it calls logout function above//
    //             onClick={ () => this.doLogout() }
    //           />
    //         </div>
    //       </div>
    //     )
    //   }
    // }
    return(
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
      </Switch>
    </Router>
  );
 }
}

export default App;
