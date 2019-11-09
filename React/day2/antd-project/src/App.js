import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';
import Alayout from './pages/Alayout/Alayout';
import Notfound from './pages/404/404';
import Login from './pages/Login/Login';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Login} exact></Route>
          <Route path='/index' component={Alayout}></Route>
          <Route component={Notfound}></Route>
        </Switch>
      </Router>
    </Provider>
    
  )
}

export default App;
