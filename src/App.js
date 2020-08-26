import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (

  <>
  <ScrollToTop />
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Route component={NoMatch} />
    </Switch>
    </BrowserRouter>
  </>

);

export default App;
