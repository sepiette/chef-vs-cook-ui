import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes';

function App() {
  return (
    <div className="App">
      <h1 className="display-4">Food Recipes</h1>
      <p className="lead">
        A curated list of recipes for the best homemade meal and delicacies.
        </p>
      <hr className="my-4" />
      <nav>
        <Link to="/recipes">Recipes Are Here</Link>
      </nav>
      <Switch>
        <Route path="/recipes" component={Recipes} />
      </Switch>
    </div>



  );
}

export default App;
