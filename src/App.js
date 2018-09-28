import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';
import WhateverMap from './Map';
import Table from './Table';

class App extends Component {
  state = {
  	data: [
  		{'timestamp': Date.now()-10000, 'latitude': 52.499040, 'longitude': 13.418392, 'temperature': 19},
  		{'timestamp': Date.now()-9000, 'latitude': 52.499040, 'longitude': 13.418393, 'temperature': 20},
  		{'timestamp': Date.now()-8000, 'latitude': 52.499040, 'longitude': 13.418394, 'temperature': 21},
  		{'timestamp': Date.now()-7000, 'latitude': 52.499040, 'longitude': 13.418395, 'temperature': 22},
  		{'timestamp': Date.now()-6000, 'latitude': 52.499040, 'longitude': 13.418396, 'temperature': 23},
  		{'timestamp': Date.now()-5000, 'latitude': 52.499040, 'longitude': 13.418397, 'temperature': 24},
  		{'timestamp': Date.now()-4000, 'latitude': 52.499040, 'longitude': 13.418398, 'temperature': 25},
  		{'timestamp': Date.now()-3000, 'latitude': 52.499040, 'longitude': 13.418399, 'temperature': 27}
  	]
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
      	<Header />
      	<WhateverMap />
      	<Table data={this.state.data} />
      </div>
    );
  }
  handleSubmit = character => {
  	this.setState({characters:[...this.state.characters, character]});
  }
}

export default App;
