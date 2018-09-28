import React, { PureComponent } from 'react';
import Leaflet from 'leaflet';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import gmap from './gmaps.png';

const markers = [
  {
    name: 'Kottbusser Tor',
    latlng: [52.499040, 13.418392]
  }, {
    name: 'Görlitzer Park',
    latlng: [52.496912, 13.436738]
  }, {
    name: 'webkid',
    latlng: [52.501106, 13.422061]
  }
];

const mapConfig = {
  center: [52.499219, 13.425416],
  zoom: 8
};

const getProvider = (x, y, z) => `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;


class WhateverMap extends PureComponent {

  onMarkerClick(evt) {
    console.log(evt.payload);
  }

  render() {
    // create an array with marker components
    const PigeonMarkers = markers.map(marker => (
      <Marker key={`marker_${marker.name}`} anchor={marker.latlng} payload={marker.name} onClick={this.onMarkerClick} />
    ));

    return (
      <div className="map">
        <Map
          width={960}
          height={300}
          defaultCenter={mapConfig.center}
          defaultZoom={mapConfig.zoom}
          provider={getProvider}
        >
          {PigeonMarkers}
        </Map>
      </div>
    );
  }
}
export default WhateverMap;