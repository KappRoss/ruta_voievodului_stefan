/* global google */
import React, {useEffect, useState} from "react";
import {
    withGoogleMap,
    GoogleMap,
    withScriptjs,
    Marker,
    DirectionsRenderer
} from "react-google-maps";


function MapDirectionsRenderer(props) {
    const [directions, setDirections] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const { places, travelMode } = props;

        const waypoints = places.map(p => ({
            location: { lat: p.latitude, lng: p.longitude },
            stopover: true
        }));
        const origin = waypoints.shift().location;
        const destination = places.length <= 1 ? origin: waypoints.pop()?.location

        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: travelMode,
                waypoints: waypoints
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    setError(result);
                }
            }
        );
    });

    if (error) {
        return <h1>{error}</h1>;
    }
    return (
        directions && (
            <DirectionsRenderer directions={directions} />
        )
    );
}

const Map = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultCenter={props.defaultCenter}
            defaultZoom={props.defaultZoom}
        >
            {props.markers.map((marker, index) => {
                const position = { lat: marker.latitude, lng: marker.longitude };
                return <Marker key={index} position={position} />;
            })}
            <MapDirectionsRenderer
                places={props.markers}
                travelMode={google.maps.TravelMode.DRIVING}
            />
        </GoogleMap>
    ))
);

export default Map;
