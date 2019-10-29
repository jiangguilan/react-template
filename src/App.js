import React from 'react';
import './App.css';
import AppHeader from './view/AppHeader/AppHeader'
import AppBody from './view/AppBody/AppBody'
import AppBottom from './view/AppBottom/AppBottom'

function App() {
  return (
    <div className="App">
      <AppHeader name="首页"/>
      <AppBody name="中部"/>
      <AppBottom name="底部"/>
    </div>
  );
}

export default App;
