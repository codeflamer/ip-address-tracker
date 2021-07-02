import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Headers>
            <Container>
                <Content1>
                    <h1>IP address tracker</h1>
                </Content1>
                <Content2>
                    <form>
                        <input type='text' placeholder='Search for any IP address or domain'/>
                        <button type='submit'><i class="fas fa-chevron-right"></i></button>
                    </form>
                </Content2>
            </Container>
        </Headers>
    )
}

const Headers = styled.header`
    // border:1px solid red;
    height:30vh;
    background:url('/images/pattern-bg.png') no-repeat;
    background-size:cover;
    background-position:center;
`;
const Container = styled.div`

`;
const Content1 = styled.div`
    // border:1px solid blue;
    padding:20px 0;
    h1{
        text-transform:capitalize;
        color:white;
        @media(max-width:768px){
            font-size:25px;
        }
    }
    text-align:center;
`;
const Content2 = styled.div`
// padding:10px 0;
width:auto;
    margin:0 auto;
    // border:1px solid orange;
    text-align:center;
    form{
        input{
            height:50px;
            padding:10px 20px;
            font-size:18px;
            border:1px solid transparent;
            border-top-left-radius:10px;
            border-bottom-left-radius:10px;
            outline:none;
            width:30%;
            @media(max-width:768px){
                font-size:16px;
                padding:8px 15px;
                width:60%;
            }
        }
        button{
            height:50px;
            font-size:18px;
            cursor:pointer;
            background:black;
            color:white;
            border:0;
            outline:none;
            padding:10px 20px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;
            &:hover{
                background:hsl(0, 0%, 17%);
            }
            @media(max-width:768px){
                font-size:16px;
                padding:8px 15px;
            }
        }
    }
`;

export default Header
