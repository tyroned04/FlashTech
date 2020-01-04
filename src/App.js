import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./Header";
import CarouselHero from "./Carousel";
import MainPrimary from "./App_Home";
import Footer from "./Footer";

import About from "./App_About";
import Services from "./App_Services";
import Careers from "./App_Careers";


function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>

          <Route path="/services">
            <Header />
            <Services />
            <Footer />
          </Route>

          <Route path="/careers">
            <Header />
            <Careers />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <CarouselHero />
            <MainPrimary />
            <Footer />
          </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;

/*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/