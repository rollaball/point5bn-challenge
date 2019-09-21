import React from "react";
import GoogleMapReact from 'google-map-react';
import locationIcon from "../images/maps-and-flags.svg";
const Map = ({lat, lng}) => 
  <div style={{ height: '200px', width: '50%', margin: "auto" }}>
  <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyASVzBpA5i6JKKbXk3-NmHtwSE2lMd7U0M" }}
    center={{
      lat: lat,
      lng: lng
    }}
    zoom={15}
  >
    <img
      alt="locationIcon"
      src={locationIcon}
      style={{height: "20px"}}
      lat={lat}
      lng={lng}
    />
  </GoogleMapReact>
</div>

export default Map;