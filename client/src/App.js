import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AlumniSearch from "./components/AlumniSearch/AlumniSearch";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router className="App">
    <Navigation />
    <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/alumnisearch">
    <AlumniSearch />
    </Route>
    </Switch>
    </Router>
    );
  }
  
  export default App;
  