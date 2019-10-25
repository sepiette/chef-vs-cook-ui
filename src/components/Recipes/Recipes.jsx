import React, { Component } from 'react';
import * as recipeService from '../../services/RecipeService.js';
import './Recipes.css';
class Recipes extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    recipeService.getAllRecipes().then(response => {
      this.setState({data: response});
    });
  }

  render() {
    return (
      <div className="Recipes">
        <div className="container">
        {this.state.data.map(recipe => (
            <div key={recipe.id} className="card">
            <img className="card-img" src={recipe.image} alt={recipe.name} />
            <h4>{recipe.name}</h4>
            <p>{recipe.ingredients}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Recipes;