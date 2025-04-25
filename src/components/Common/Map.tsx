'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { Box } from '@mui/material';

// Fix for default marker icon
const icon = new Icon({
  iconUrl: '/location-pin.svg',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface MapLocation {
  lat: number;
  lng: number;
}

interface MapProps {
  locations: {
    id: number;
    name: string;
    address: string;
    phone: string;
    location: MapLocation;
  }[];
  center?: [number, number];
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ 
  locations, 
  center = [20.5937, 78.9629], // Center of India by default
  zoom = 5 
}) => {
  return (
    <Box sx={{ width: '100%', height: '500px', mb: 4 }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%', borderRadius: '8px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.location.lat, location.location.lng]}
            icon={icon}
          >
            <Popup>
              <div>
                <h3>{location.name}</h3>
                <p>{location.address}</p>
                {/* <p>Phone: {location.phone}</p> */}
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${location.location.lat},${location.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default Map;
