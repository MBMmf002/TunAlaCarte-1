import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import places from '../data/places.json';

// Fix for Leaflet default icon bug in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const InteractiveMap = () => {
  const center = [33.8869, 9.5375]; // Tunisia Center

  return (
    <div className="h-[500px] w-full z-0">
      <MapContainer 
        center={center} 
        zoom={6} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap contributors'
        />

        {places.map((place) => {
          // Safety check for coordinates
          if (!place.lat || !place.lng) return null;

          return (
            <Marker key={place.id} position={[place.lat, place.lng]}>
              <Popup>
                <div className="text-center">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-24 object-cover rounded mb-2" 
                  />
                  <h3 className="font-bold">{place.name}</h3>
                  <p className="text-xs text-gray-500">{place.type}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;