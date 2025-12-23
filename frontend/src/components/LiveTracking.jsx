import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const RecenterMap = ({ position }) => {
    const map = useMap();
    useEffect(() => {
        if (position) {
            map.setView([position.lat, position.lng], 15);
        }
    }, [position, map]);
    return null;
};

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState({
        lat: 28.7041,
        lng: 77.1025
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ lat: latitude, lng: longitude });
        });

        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ lat: latitude, lng: longitude });
        }, (err) => console.error(err), { enableHighAccuracy: true });

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    return (
        <div className="w-full h-full">
            <MapContainer 
                center={[currentPosition.lat, currentPosition.lng]} 
                zoom={15} 
                className="h-full w-full"
                attributionControl={false}
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[currentPosition.lat, currentPosition.lng]} />
                <RecenterMap position={currentPosition} />
            </MapContainer>
        </div>
    )
}

export default LiveTracking