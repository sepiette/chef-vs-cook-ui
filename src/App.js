import React from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes/Recipes';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="global-header">
          <h1 className="header">Food Recipes</h1>
          <p className="lead">
            A curated list of recipes for the best homemade meal and delicacies.
        </p>
        </div>
        <nav className="global-nav">
          <Link className="link" to="/recipes">Recipes</Link>
        </nav>
        <Switch>
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
