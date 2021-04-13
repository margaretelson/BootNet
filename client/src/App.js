import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import AlumniSearch from './AlumniSearch';
import Navbar from './Navbar';


function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/alumnisearch'>
          <AlumniSearch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
