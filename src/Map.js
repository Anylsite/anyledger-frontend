import React, { PureComponent } from 'react';
import MapGL from 'react-map-gl';
import DeckGL, { ScatterplotLayer } from 'deck.gl';

const mapbox_token = 'pk.eyJ1IjoicmFuZG9tc2hpbmljaGkiLCJhIjoiY2ptbTJ0MmhuMGI1djN2bnUyN2xiMmRuOCJ9.0a1Zsdrz8NOagQvtVB2_qQ'
const mapConfig = {
  center: [52.540875, 13.438545],
  zoom: 13
};

class WhateverMap extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        width: 960,
        height: 600,
        latitude: mapConfig.center[0],
        longitude: mapConfig.center[1],
        zoom: mapConfig.zoom,
        startDragLngLat: mapConfig.center,
      },
    };

    this.onChangeViewport = this.onChangeViewport.bind(this);
  }

  onChangeViewport(viewport) {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  }

  initialize(gl) {
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE_MINUS_DST_ALPHA, gl.ONE);
    gl.blendEquation(gl.FUNC_ADD);
  }

  render() {
    const { viewport } = this.state;
    const { data } = this.props;

	const plot_position_layer = new ScatterplotLayer({
	    id: 'scatterplot-layer',
	    data,
	    pickable: true,
	    opacity: 0.3,
	    radiusScale: 30,
	    radiusMinPixels: 1,
	    radiusMaxPixels: 100,
	    getPosition: d => [d.coordinates[1], d.coordinates[0]],
	    getColor: d => {
        const threshold = 25
        if(d.temperature >= threshold - 2 && d.temperature < threshold) {
          return [128,128,0]
        }
        else if(d.temperature > threshold) {
          return [255, 0, 0]
        }
        else {
          return [0, 255, 0]
        }
      }
	})

    return (
      <div className="reactmapgldeckgl">
        <MapGL
          {...viewport}
          mapboxApiAccessToken={mapbox_token}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onChangeViewport={this.onChangeViewport}
        >
          <DeckGL
            {...viewport}
            onWebGLInitialized={this.initialize}
            layers={[plot_position_layer]}
          />
        </MapGL>
      </div>
    );
  }
}

export default WhateverMap;