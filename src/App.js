import React, { Component } from 'react';
import Header from './Header';
import WhateverMap from './Map';
import Table from './Table';

class App extends Component {
  state = {
  	// Trip along the Ringbahn
  	data: [
  		{'timestamp': Date.now()-10000, 'coordinates': [52.536131,13.447444], 'temperature': 19},
  		{'timestamp': Date.now()-9000, 'coordinates': [52.538221,13.44376], 'temperature': 20},
  		{'timestamp': Date.now()-8000, 'coordinates': [52.540247,13.43899], 'temperature': 21},
  		{'timestamp': Date.now()-7000, 'coordinates': [52.541751,13.43513], 'temperature': 22},
  		{'timestamp': Date.now()-6000, 'coordinates': [52.54264,13.433692], 'temperature': 23},
  		{'timestamp': Date.now()-5000, 'coordinates': [52.543007,13.431339], 'temperature': 24},
  		{'timestamp': Date.now()-4000, 'coordinates': [52.543755,13.428731], 'temperature': 25},
  		{'timestamp': Date.now()-3000, 'coordinates': [52.544295,13.427207], 'temperature': 27}
  	]
  };
  render() {
    return (
      <div className="container">
      	<Header />
      	<WhateverMap data={this.state.data} />
      	<Table data={this.state.data} />
      </div>
    );
  }
}

export default App;
