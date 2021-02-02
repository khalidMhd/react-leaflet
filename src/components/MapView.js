import React, { Component, useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

 function MapView(props) {
  const [currentLocation, setCurrentLocation] = useState(({ lat: 52.52437, lng: 13.41053 }))
  const [zoom, setZoom] = useState(12)

    return (
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Markers venues={data.venues}/>
      </Map>
    );
  }


export default MapView;
