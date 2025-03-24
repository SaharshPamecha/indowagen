'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
const icon = new Icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface Location {
  id: number;
  name: string;
  coordinates: [number, number];
  address: string;
  phone: string;
}

interface LeafletMapProps {
  locations: Location[];
  center: [number, number];
  zoom: number;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ locations, center, zoom }) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.coordinates}
          icon={icon}
        >
          <Popup>
            <div>
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <p>Phone: {location.phone}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;
