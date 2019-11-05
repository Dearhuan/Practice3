import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Alayout from './pages/Alayout/Alayout';
import Notfound from './pages/404/404'

// function App() {
//   return (
//     <div className="App">
//       <Alayout />
//     </div>
//   );
// }

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path='/' component={Alayout} exact></Route>
          <Route component={Notfound}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
