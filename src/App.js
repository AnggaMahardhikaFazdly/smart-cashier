import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './Components';
import { Home, Success } from './Pages';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/success" component={Success} exact />
        </Switch>
      </main>
    </Router>
  )
}

export default App
