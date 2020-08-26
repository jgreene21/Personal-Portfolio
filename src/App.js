import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (

  <>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <ScrollToTop>
    <Switch>
      <Route exact path="/" component={About} />
      <Route path= "/projects"component={Projects} />
      <Route component={NoMatch} />
    </Switch>
    </ScrollToTop>
    </BrowserRouter>
  </>

);

export default App;
