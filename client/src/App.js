import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Horses from "./Pages/Horses";
import Home from "../src/Pages/Home"

import Navbar from "./components/Nav"
import Weanlings from "./Pages/Weanlings";
import Yearlings from "./Pages/Yearlings";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        {/* <Horses /> */}
        <Route  path="/" component={Home} />
        {/* 
        <Route  path="/SearchHorses" component={SearchHorses} />
        <Route  path="/AddHorse" component={AddHorse} />
      <Route  path="/AllHorses" component={AllHorses} /> */}
        {/* <Route path="/Weanlings" component={Weanlings} /> */}
        {/* <Route  path="/Yearlings" component={Yearlings} />
        <Route  path="/About" component={About} /> */}
      </Switch>

    </div>
  </Router>
);


export default App;

// This code is what we're going to use when we have the pages and components made later on
// Not necessarily the components that will house what we want but thats there for now so we know what
// is going where 

