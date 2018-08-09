import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav"
import Home from "./Pages/Home"
import About from "./Pages/About";
import SearchHorses from "./Pages/SearchHorses";
import Weanlings from "./Pages/Weanlings";
import Yearlings from "./Pages/Yearlings";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route  exact path="/About" component={About} /> 
        <Route  exact path="/SearchHorses" component={SearchHorses} />
        {/* <Horses /> */}
        {/* 
        <Route  path="/AddHorse" component={AddHorse} />
      <Route  path="/AllHorses" component={AllHorses} /> */}
        {/* <Route path="/Weanlings" component={Weanlings} /> */}
        {/* <Route  path="/Yearlings" component={Yearlings} />
        */}
      </Switch>

    </div>
  </Router>
);


export default App;

// This code is what we're going to use when we have the pages and components made later on
// Not necessarily the components that will house what we want but thats there for now so we know what
// is going where 

