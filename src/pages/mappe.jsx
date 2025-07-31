import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import useFetch from '../utils/CustomHook/useFetch';

const FlyToLocation = ({ location }) => {
    const map = useMap();

    useEffect(() => {
        if (location) {
            map.flyTo([location.lat, location.lng], 15, {
                duration: 2,
            });
        } else {
            map.flyTo([20, 0], 2, { duration: 2 });
        }
    }, [location, map]);

    return null;
};

const Mappe = () => {
    const { data: locations, loading, error } = useFetch('../mockData/mappe.json');
    const [selectedLocation, setSelectedLocation] = useState(null);

    const markerIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
    });

    if (loading) return <p>Caricamento in corso...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <div className="container-mapp">
            <div className="left-panel">
                <h2>McDonald's nel mondo</h2>
                <ul>
                    {locations && locations.map((loc, i) => (
                        <li key={i}>
                            <button
                                className="location-btn"
                                onClick={() => setSelectedLocation(loc)}
                            >
                                {loc.nome} – {loc.città}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="right-panel">
                <MapContainer
                    center={[20, 0]}
                    zoom={2}
                    scrollWheelZoom={true}
                    style={{ height: '450px', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {selectedLocation && (
                        <Marker
                            position={[selectedLocation.lat, selectedLocation.lng]}
                            icon={markerIcon}
                        >
                            <Popup>{selectedLocation.nome} – {selectedLocation.città}</Popup>
                        </Marker>
                    )}

                    <FlyToLocation location={selectedLocation} />
                </MapContainer>
            </div>
        </div>
    );
};

export default Mappe;
