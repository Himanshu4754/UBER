const axios = require('axios');
const captainModel = require('../models/captain.model')

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GEOAPI_FY; 
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        if (response.data.features && response.data.features.length > 0) {
            const location = response.data.features[0].geometry.coordinates;
            return {
                lat: location[1],
                lng: location[0]
            };
        } else {
            throw new Error('Address not found');
        }
    } catch (error) {
        throw error;
    }
};

module.exports.getDistanceTime = async (origin, destination) => {
    const apiKey = process.env.GEOAPI_FY;
    
    let originCoords, destinationCoords;

    try {
        originCoords = JSON.parse(origin);
    } catch (e) {
        originCoords = await this.getAddressCoordinate(origin);
    }

    try {
        destinationCoords = JSON.parse(destination);
    } catch (e) {
        destinationCoords = await this.getAddressCoordinate(destination);
    }

    const url = `https://api.geoapify.com/v1/routing?waypoints=${originCoords.lat},${originCoords.lng}|${destinationCoords.lat},${destinationCoords.lng}&mode=drive&apiKey=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        if (response.data.features && response.data.features.length > 0) {
            const route = response.data.features[0];
            const distanceInMeters = route.properties.distance;
            const timeInSeconds = route.properties.time;
            
            const distanceInKm = (distanceInMeters / 1000).toFixed(0);
            const hours = Math.floor(timeInSeconds / 3600);
            const minutes = Math.floor((timeInSeconds % 3600) / 60);
            
            let durationText = '';
            if (hours > 0 && minutes > 0) {
                durationText = `${hours} ${hours === 1 ? 'hour' : 'hours'} ${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
            } else if (hours > 0) {
                durationText = `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
            } else {
                durationText = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
            }
            
            return {
                distance: {
                    text: `${distanceInKm} km`,
                    value: distanceInMeters
                },
                duration: {
                    text: durationText,
                    value: timeInSeconds
                },
                status: "OK"
            };
        } else {
            throw new Error('Route not found');
        }
    } catch (error) {
        throw error;
    }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.GEOAPI_FY;
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(input)}&apiKey=${apiKey}`;
    
    try {
        const response = await axios.get(url);
        if (response.data.features) {
            return response.data.features.map(feature => ({
                formatted: feature.properties.formatted,
                lat: feature.geometry.coordinates[1],
                lng: feature.geometry.coordinates[0]
            }));
        }
        return [];
    } catch (error) {
        throw error;
    }
};

module.exports.getCaptainsInTheRadius = async (lat, lng, radius) => {

    const radiusInMeters = radius * 1000;

    const captains = await captainModel.find({
        location: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [lng, lat] 
                },
                $maxDistance: radiusInMeters
            }
        },
        status: 'active' 
    });

    return captains;
}