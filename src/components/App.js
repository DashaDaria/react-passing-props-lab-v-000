import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fruit: [],
      currentFilter: null,
      filters: []
    };
  }

  componentDidMount() {
    this.fetchFruit();
    this.fetchFilters();
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleChange = (e) => {
    console.log('new filter: ', e.target.value);
    this.setState({currentFilter: e.target.value})
  }


  render(){
    return (
      <FruitBasket
        handleChange={this.handleChange}
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        />
    )
  }
}
