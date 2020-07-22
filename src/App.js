import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/projects" component={Projects} />
      <Route component={NoMatch} />
    </Switch>
  </>
);

export default App;
