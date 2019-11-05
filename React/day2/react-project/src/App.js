import React from 'react';
import 'weui';

import Header from './components/Header/index.jsx';
import Search from './components/Search/index.jsx';
import Panel from './components/Panel/index.jsx';

//全局使用一个函数组件
function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Panel/>
    </div>
  );
}

export default App;
