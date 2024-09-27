// src/components/MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px', // Adjust height as needed
};

const center = {
  lat: 37.0902, // Center of the US
  lng: -95.7129,
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBtMp-wqCBAjy3x7QXUdBGj86yIfgDGXCA"> {/* Replace with your API key */}
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
        {/* You can add markers or other components here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
