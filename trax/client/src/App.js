import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckIn from "./pages/CheckIn";
import SignUp from "./pages/SignUp"
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/CheckIn" component={  CheckIn }/>
        <Route exact path="/SignUp" component={ SignUp } />
      </Switch>
    </Router>
  );
}

export default App;
