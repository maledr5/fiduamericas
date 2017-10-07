import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const CustomMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -0.202985, lng: -78.48167 }}>
    {props.isMarkerShown && <Marker position={{ lat: -0.202985, lng: -78.48167 }} />}
  </GoogleMap>
))

export default CustomMap
