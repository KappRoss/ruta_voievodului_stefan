import React from "react";
import {
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    DirectionsRenderer
} from "react-google-maps";
import { withProps, compose, lifecycle } from "recompose";

const MapWithADirectionsRenderer = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAzICfk_cT_rY6SjI_OHIZBABrGW7B7ars&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px`, width: "100%" }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new window.google.maps.DirectionsService();

            DirectionsService.route(
                {
                    origin: new window.google.maps.LatLng(-37.8136, 144.9631),
                    destination: new window.google.maps.LatLng(-37.8116, 145.23),
                    travelMode: window.google.maps.TravelMode.DRIVING
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        this.setState({
                            directions: result
                        });
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        }
    })
)(props => (
    <GoogleMap
        defaultZoom={10}
        defaultCenter={new window.google.maps.LatLng(-37.8136, 144.9631)}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
));

class Map extends React.Component {
    render() {
        return (
            <React.Fragment>
                <MapWithADirectionsRenderer />
            </React.Fragment>
        );
    }
}

export default Map;
