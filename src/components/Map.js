import React from 'react'
import styled from 'styled-components'

const Map = () => {
    return (
        <Container>
            <MapArea>
            <div id="map">

            {/* map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 6,
            }); */}
            </div>

            {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly" async></script> */}
            </MapArea>
        </Container>
    )
}

const Container = styled.section``;
const MapArea = styled.div`
    background:red;
    height:100%;
    // border
`;

export default Map
