import React from 'react';
import './App.css';
import Home from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';
import ErrorPage from './Components/errorPage';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

const RouteElement = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route  path="/contact" component={Contact} />
      <Route  component={Home} />
    </Switch>
  </Router>
) 

export default RouteElement;