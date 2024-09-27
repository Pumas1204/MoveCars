
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px', 
};

const center = {
  lat: 37.0902, 
  lng: -95.7129,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBtMp-wqCBAjy3x7QXUdBGj86yIfgDGXCA"> 
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
     
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
