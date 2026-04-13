import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import places from '../data/places.json';

// --- FIX FOR LEAFLET DEFAULT ICONS ---
// This prevents the "missing marker" icon bug in React/Vercel
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const InteractiveMap = () => {
  // Center of Tunisia
  const center = [33.8869, 9.5375];

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative z-0">
      <MapContainer 
        center={center} 
        zoom={6} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        {/* Using CartoDB Voyager tiles for a clean, premium "Travel DNA" look */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {places.map((place) => {
          // SAFETY CHECK: Ensure lat and lng exist before rendering Marker
          if (!place.lat || !place.lng) {
            console.warn(`Place ${place.name} is missing coordinates!`, place);
            return null;
          }

          return (
            <Marker key={place.id} position={[place.lat, place.lng]}>
              <Popup className="custom-popup">
                <div className="p-1">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-24 object-cover rounded-md mb-2"
                    // Fallback if image path is broken
                    onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
                  />
                  <h3 className="font-bold text-lg text-[#2D3436]">{place.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{place.description}</p>
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