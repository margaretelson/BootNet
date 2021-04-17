import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AlumniSearch from "./pages/AlumniSearch";
import Navigation from "./components/Navigation/Navigation";

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
