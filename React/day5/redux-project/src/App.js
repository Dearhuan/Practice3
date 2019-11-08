import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import store from './store'

//引入Provider和store，将store注入Provider中，并放入全局
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <hr/>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
