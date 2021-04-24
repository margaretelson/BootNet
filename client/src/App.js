import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlumniSearch from "./pages/AlumniSearch";
import Navigation from "./components/Navigation/Navigation";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
function App() {
  return (
    <Router className="App">
      <Navigation />
  
        <Route path="/search">
          <AlumniSearch />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
    </Router>
  );
}

export default App;
