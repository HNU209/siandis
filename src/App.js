import React from 'react';
import './css/App.css';

// load component
import Nav from './component/Nav';
import Header from './component/Header';
import Service from './component/Service';
import Portfolio from './component/Portfolio';
import About from './component/About';
import Team from './component/Team';

export default function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Service></Service>
      <Portfolio></Portfolio>
      <About></About>
      <Team></Team>
    </div>
  );
}