import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import { HomePage } from "./pages/homePage/HomePage";
import { ServicesPage } from "./pages/servicesPage/ServicesPage";
import { Navbar } from "./components/UI/Navbar";
import { AdvantagePage } from "./pages/advantagePage/AdvantagePage";
import { ContactPage } from "./pages/contactPage/ContactPage";
import { AboutPage } from "./pages/aboutPage/AboutPage";
// import { UnderConstruction } from "./components/UnderConstruction";

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      {/* <Route exact path="/" component={UnderConstruction} /> */}
      <Route exact path="/" component={HomePage} />

      <Route exact path="/services" component={ServicesPage} />
      <Route exact path="/advantage" component={AdvantagePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  </div>
);
export default App;
