import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  const position = [40.464392, 19.48955];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Hello, this is a map using OpenStreetMap!</Popup>
      </Marker>
    </MapContainer>
  );
};
