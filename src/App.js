import './App.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import AddReview from './components/Home/AddReview/AddReview';
import ServiceCheckOut from './components/ServiceCheckOut/ServiceCheckOut';
import Orders from './components/Orders/Orders';
import Blogs from './components/Home/Blogs/Blogs';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>


          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <PrivateRoute path="/addReviews">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/details/:_id">
            <ServiceCheckOut></ServiceCheckOut>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
