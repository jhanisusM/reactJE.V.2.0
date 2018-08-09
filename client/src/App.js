import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/Pages/Home"
import About from "../src/Pages/About";
import Horses from "./Pages/Horses";

import Navbar from "./components/Nav"
import Weanlings from "./Pages/Weanlings";
import Yearlings from "./Pages/Yearlings";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route  exact path="/About" component={About} /> 
      </Switch>

    </div>
  </Router>
);


export default App;

// This code is what we're going to use when we have the pages and components made later on
// Not necessarily the components that will house what we want but thats there for now so we know what
// is going where 

