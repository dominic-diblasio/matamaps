import React from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';

// Custom marker icon
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Custom Leaflet Icon
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const MapPage = () => {
  const location = useLocation();
  const eventLocation = location?.state?.location || 'CSUN Campus';

  // Accurate campus locations with updated coordinates
  const locationCoordinates = {
    "Bookstore": { lat: 34.237427, lng: -118.528000 },
    "Jerome Richfield Hall": { lat: 34.238967, lng: -118.530251 },
    "CSUN Library": { lat: 34.240104, lng: -118.529024 },
    "Sierra Hall": { lat: 34.238271, lng: -118.531293 },
    "Jacaranda Hall": { lat: 34.241246, lng: -118.528427 },
    "Oviatt Library": { lat: 34.240104, lng: -118.529024 }, // Alias for CSUN Library
    "University Student Union": { lat: 34.240140, lng: -118.526814 },
    "Mike Curb College Of Arts, Media And Communication": { lat: 34.243776, lng: -118.529924 },
    "Campus Theatre": { lat: 34.236208, lng: -118.530229 },
    "Student Recreation Center": { lat: 34.240055, lng: -118.524491 },
    "Manzanita Hall": { lat: 34.237787, lng: -118.529972 },
    "CSUN Campus": { lat: 34.239171, lng: -118.527593 } // Default to center of campus
  };

  // Default to CSUN Campus if the location is not found
  const eventCoordinates = locationCoordinates[eventLocation] || locationCoordinates["CSUN Campus"];

  // Restrict the map to stay within CSUN campus bounds
  const csunBounds = L.latLngBounds(
    [34.245541, -118.532949], // North-West (top-left)
    [34.231601, -118.520151]  // South-East (bottom-right)
  );

  return (
    <div style={{ height: "100vh" }}>
      <h2 className="text-center">Event Location: {eventLocation}</h2>
      <MapContainer 
        center={[eventCoordinates.lat, eventCoordinates.lng]} 
        zoom={18} 
        minZoom={16} 
        maxZoom={19}
        maxBounds={csunBounds} 
        maxBoundsViscosity={1.0} 
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        <Marker 
          position={[eventCoordinates.lat, eventCoordinates.lng]} 
          icon={customIcon}
        >
          <Popup>
            <strong>{eventLocation}</strong>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapPage;



// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";
// import 'leaflet/dist/leaflet.css';

// // Import marker images correctly using require()
// const customIcon = new L.Icon({
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
//   iconSize: [25, 41],
//   iconAnchor: [12, 41]
// });

// // CSUN campus bounding box (SW, NE)
// const CSUN_BOUNDS = [
//   [34.2355, -118.5332], // Southwest corner
//   [34.2449, -118.5227]  // Northeast corner
// ];

// const MapPage = (props) => {
//   const location = useLocation();
//   const eventLocation = location?.state?.location || 'CSUN';

//   // Pre-defined coordinates for CSUN and its locations
//   const csunCoordinates = { lat: 34.239208, lng: -118.528992 };

//   const locationCoordinates = {
//     "CSUN Library": { lat: 34.241542, lng: -118.527498 },
//     "Sierra Hall": { lat: 34.237516, lng: -118.528929 },
//     "Oviatt Library": { lat: 34.241542, lng: -118.527498 },
//     "Bookstore": { lat: 34.239788, lng: -118.530649 }
//   };

//   // Fallback to CSUN coordinates if location is unknown
//   const eventCoordinates = locationCoordinates[eventLocation] || csunCoordinates;

//   // Custom hook to set and lock the map's view within CSUN campus
//   const LockMapToBounds = () => {
//     const map = useMap();

//     // Lock to CSUN bounds and disable zoom and dragging
//     map.setView([eventCoordinates.lat, eventCoordinates.lng], 16);
//     map.setMaxBounds(CSUN_BOUNDS);
//     map.options.minZoom = 16; // Lock the zoom level
//     map.options.maxZoom = 16; // Lock the zoom level
//     map.options.scrollWheelZoom = false; // Disable scroll zoom
//     map.options.doubleClickZoom = false; // Disable double click zoom
//     map.options.dragging = false; // Disable map dragging
//     map.options.touchZoom = false; // Disable touch zoom
//     map.options.boxZoom = false; // Disable box zoom
//     map.options.keyboard = false; // Disable keyboard shortcuts

//     return null; // No visual component
//   };

//   return (
//     <div style={{ height: "100vh" }}>
//       <h2 className="text-center">Event Location: {eventLocation}</h2>
//       <MapContainer 
//         center={[eventCoordinates.lat, eventCoordinates.lng]} 
//         zoom={16} 
//         style={{ height: "90vh", width: "100%" }}
//         maxBounds={CSUN_BOUNDS} 
//         maxBoundsViscosity={1.0} 
//         scrollWheelZoom={false}
//         doubleClickZoom={false}
//         dragging={false}
//         zoomControl={false}
//         touchZoom={false}
//       >
//         <LockMapToBounds /> {/* Custom hook to lock map view */}
//         <TileLayer 
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
//         />
//         <Marker 
//           position={[eventCoordinates.lat, eventCoordinates.lng]} 
//           icon={customIcon}
//         >
//           <Popup>
//             <strong>{eventLocation}</strong>
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default MapPage;


// import React from "react";
// import { useLocation } from "react-router-dom";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import * as L from "leaflet";
// import 'leaflet/dist/leaflet.css';

// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// const customIcon = new L.Icon({
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41]
// });

// const MapPage = (props) => {
//   const location = useLocation();
//   const eventLocation = location?.state?.location || 'CSUN';

//   const csunCoordinates = { lat: 34.239208, lng: -118.528992 };

//   const locationCoordinates = {
//     "CSUN Library": { lat: 34.241542, lng: -118.527498 },
//     "Sierra Hall": { lat: 34.237516, lng: -118.528929 },
//     "Oviatt Library": { lat: 34.241542, lng: -118.527498 },
//     "Bookstore": { lat: 34.239788, lng: -118.530649 }
//   };

//   const eventCoordinates = locationCoordinates[eventLocation] || csunCoordinates;

//   return (
//       <div style={{ height: "100vh" }}>
//         <h2 className="text-center">Event Location: {eventLocation}</h2>
//         <MapContainer 
//           center={[eventCoordinates.lat, eventCoordinates.lng]} 
//           zoom={16} 
//           style={{ height: "90vh", width: "100%" }}
//         >
//           <TileLayer 
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
//           />
//           <Marker 
//             position={[eventCoordinates.lat, eventCoordinates.lng]} 
//             icon={customIcon}
//           >
//             <Popup>
//               <strong>{eventLocation}</strong>
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//   );
// };

// export default MapPage;