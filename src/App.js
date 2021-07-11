import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

class App extends React.Component{

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
        <Route path='/Autoholics' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
      </Switch>
    </Router>
  );
 }
}

export default App;
