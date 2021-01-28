import { popup } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import * as data from "./data/data.json";

import "./styles.scss";

export default function App() {
  const geojsonPoints = data.features.map((data) => ({
    type: "Feature",
    properties: {
      cluster: false,
      ParkID: data.properties.PARK_ID,
      DESCRIPTION: data.properties.DESCRIPTION
    },
    geometry: {
      type: "Point",
      coordinates: [data.geometry.location[1], data.geometry.location[0]]
    }
  }));
  console.log(geojsonPoints);
  return (
    <MapContainer
      className="markercluster-map"
      center={[0.0, 0.0]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <MarkerClusterGroup>
        {geojsonPoints.map((geojsonPoint) => (
          <Marker position={geojsonPoint.geometry.coordinates}>
            <Popup>
              <div>
                <img src="" alt="loda"></img>
                <p>{geojsonPoint.properties.ParkID}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        <Marker position={[52.241297, 21.012222]} /> */}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

// [
//   {
//     location:{

//     },
//     userInfo:{
//       name : "",
//       photoUrl:"",
//       ...OtherItems
//     }
//   },

// ]
