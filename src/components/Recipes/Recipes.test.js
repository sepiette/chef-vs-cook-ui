import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Recipes from './Recipes';

describe('<Recipes />', () => {
  const mockRecipes = [{
    id: 1,
    name: 'Recipe 1',
    ingredients: 'A spoonful of sugar',
    instruction: 'makes the medicine go down',
    image: 'https://fakeimg.pl/250x100/'
  }];
  
  it('renders recipe container with 1 recipe', () => {
    const wrapper = shallow(<Recipes />);
    wrapper.setState({data: mockRecipes});
    expect(wrapper.find('.card')).to.have.length(1);
    expect(wrapper.find('.card p').text()).to.equal(mockRecipes[0].ingredients);
  })
})