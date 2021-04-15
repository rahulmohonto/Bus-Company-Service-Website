import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/Admin/Admin';

function App() {
  return (
    <Router>
      <Switch>


        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
