import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Map = ({ title, location, latitude, longitude }) => {
const mapCenter = [latitude, longitude];
  return (
    <MapContainer center={mapCenter} zoom={20} style={{ height: '400px', width: '450px'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={mapCenter}>
        <Popup>
         <div>
           <h3>{title}</h3>
            <p>{location}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map