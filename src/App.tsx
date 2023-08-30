import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { render } from 'react-dom';
// import {Home, Foo, Bar} from './Pages';
import Routes from './routes';
import HomeContainer from './pages/Home';

function App() {
  return (
    <div className="app">
      <main className="content">
        <Routes /> {/* Include the routing component */}
        <HomeContainer></HomeContainer>
      </main>
    </div>
  );
          }

export default App