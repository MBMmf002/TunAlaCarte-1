import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import places from '../data/places.json';

const InteractiveMap = () => {
  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
      <MapContainer center={[33.8869, 9.5375]} zoom={6} scrollWheelZoom={false} className="h-full">
        {/* Using CartoDB Voyager for a clean, modern look */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {places.map(place => (
          <Marker key={place.id} position={place.coords}>
            <Popup>
              <div className="font-sans">
                <h3 className="font-bold text-blue-900">{place.name}</h3>
                <p className="text-xs text-gray-600">{place.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;