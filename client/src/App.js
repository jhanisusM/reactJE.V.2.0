import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav"
import Home from "./Pages/Home"
import About from "./Pages/About";
import SearchHorses from "./Pages/SearchHorses";
import AddHorse from "./Pages/AddHorse"
import AllHorses from "./Pages/AllHorses";
import YearlingsWeanlings from "./Pages/YearlingsWeanlings";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SearchHorses" component={SearchHorses} />
        <Route exact path="/AllHorses" component={AllHorses} /> */}
        <Route exact path="/AddHorse" component={AddHorse} />
        <Route exact path="/YearlingsWeanlings" component ={YearlingsWeanlings} /> 
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  </Router>
);

export default App;

