import React,{useEffect} from 'react'
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import Locationpin from './Locationpin';
import { useSelector } from 'react-redux';
import { getDetails } from '../features/counter/addressSlice';


const MapA = () => {

    const locDet = useSelector(getDetails);
    useEffect(() => {
        // alert('hello, changes have been made');
    }, [locDet])


    if (locDet){
        return (
            <Container>
                <MapArea>
                <div id="map">
    
                </div>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyDh-IxWdeWdcx9KD1l_yHAqPAQ3uEHQZnk" }}
                        defaultCenter={{lat: locDet.location.lat,
                                       lng: locDet.location.lng}}
                        defaultZoom={1}
                    >
                    <Locationpin
                        lat={locDet.location.lat}
                        lng={locDet.location.lng}
                        text="My ISP Location"
                    />
                    </GoogleMapReact>
                </div>
                </MapArea>
            </Container>
        )
    }
    else{
        return <h3>Loading Google maps...</h3>
    }   
}

const Container = styled.section``;
const MapArea = styled.div`
    // background:red;
    height:100%;
    width:100%;
    z-index:-1;
    // border
`;

export default MapA;
