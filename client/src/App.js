import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AlumniSearch from "./components/AlumniSearch";
import Navigation from "./Navigation";

function App() {
  return (
    <Router className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="./components/alumnisearch">
          <AlumniSearch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
