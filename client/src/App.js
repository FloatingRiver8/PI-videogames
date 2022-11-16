import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Henry Videogames</h1>
        
        <Route exact path='/' component={LandingPage}></Route>
        <Route exact path= '/home' component={Home}></Route>
      </div>
    </Router>
  );
}

export default App;
