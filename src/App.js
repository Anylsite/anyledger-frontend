import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
  	characters: []
  };
  removeCharacter = index => {
  	const { characters } = this.state;
  	this.setState({
  		characters: characters.filter((character, i) => {
  			return i !== index;
  		})
  	});
  }
  render() {
    return (
      <div className="container">
        <Table 
        	characterData={this.state.characters}
        	removeCharacter={this.removeCharacter}
        />
      	<Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
  handleSubmit = character => {
  	this.setState({characters:[...this.state.characters, character]});
  }
}

export default App;
