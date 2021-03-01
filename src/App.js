import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from './Components';
import { Home, SuccessPayment } from './Pages';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/success-payment" component={SuccessPayment} exact />
        </Switch>
      </main>
    </Router>
  )
}

export default App
