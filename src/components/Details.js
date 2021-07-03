import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getDetails } from '../features/counter/addressSlice';

const Details = ({info}) => {

    const detail = useSelector(getDetails);
    console.log(detail);
    if(detail){
        return (
            <Container>
                <AbsoluteContainer>
                <Contents>
                    <Content1>
                        <TitleDetail>
                            <span>Ip address</span>
                        </TitleDetail>
                        <IpInfo>
                            {detail.ip}
                        </IpInfo>
                    </Content1>
                    <Content2>
                        <TitleDetail>
                            <span>Location</span>
                        </TitleDetail>
                        <IpInfo>
                            {/* Brooklyn,NY 10001 */}
                            {detail.location.city},{detail.location.country} {detail.location.geonameId}
                        </IpInfo>
                    </Content2>
                    <Content3>
                        <TitleDetail>
                            <span>timezone</span>
                        </TitleDetail>
                        <IpInfo>
                            UTC
                            {/* 05:00 */}
                            {detail.location.timezone}
                        </IpInfo>   
                    </Content3>
                    <Content4>
                        <TitleDetail>
                            <span>Isp</span>
                        </TitleDetail>
                        <IpInfo>
                            {/* SpaceX Starlink */}
                            {detail.isp}
                        </IpInfo>
                    </Content4>
                </Contents>
                </AbsoluteContainer>
            </Container>
        )
    }
    else{
        return <h3>Loading...</h3>
    }

    
}

const Container = styled.section`
position:relative;
`;
const AbsoluteContainer = styled.div`
    position:absolute;
    top:-60px;
    // border:1px solid blue;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    padding:0 35px;
`
const Contents = styled.div`
// border:1px solid red;
    margin:0 auto;
    text-align:center;
    background:white;
    // border:1px solid red;
    box-shadow:1px 4px 8px  hsl(0, 0%, 59%);
    width:100%;
    max-width:1080px;
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    padding:30px 10px;
    border-radius:10px;
    @media(max-width:768px){
        grid-template-columns:repeat(1, 1fr);
        padding:20px 10px;
    }
`;
const Content1 = styled.div`
    // border:1px solid red;
    border-right:1px solid hsl(0, 0%, 59%);
    margin:0 15px;
    @media(max-width:768px){
        border:0;
    }
`

const Content2 = styled.div`
    border-right:1px solid hsl(0, 0%, 59%);
    margin:0 15px;
    @media(max-width:768px){
        border:0;
    }
`;
const Content3 = styled.div`
    border-right:1px solid hsl(0, 0%, 59%);
    margin:0 15px;
    @media(max-width:768px){
        border:0;
    }
`;
const Content4 = styled.div`
margin:0 15px;
    @media(max-width:768px){
        border:0;
    }
`;
const TitleDetail = styled.div`
    margin-bottom:20px;
    padding-right:10px;
    span{
        color:hsl(0, 0%, 59%);
        text-transform:uppercase;
        font-size:15px;
        font-weight:bold;
    }
    @media(max-width:768px){
        margin-bottom:10px;
    }
`;
const IpInfo = styled.div`
    padding-right:10px;
    font-size:25px;
    font-weight:500;
    @media(max-width:768px){
        font-size:20px;
        font-weight:400;
        margin-bottom:20px;
    }
`;

export default Details
