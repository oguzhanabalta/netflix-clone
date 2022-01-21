import styled from "styled-components";


export const Container = styled.div`
    display:flex;
    flex-direction:column;
    border-bottom:8px solid #222;
    text-align:center;
    padding:140px 20px;

`;

export const Title = styled.h1`
    color:white;
    max-width:648px;
    font-size:50px;
    font-weight:bold;
    margin:auto;

    @media(max-width: 600px){
        font-size:35px;
    }
`;

export const SubTitle = styled.h2`
    color:white;
    max-width:648px;
    font-size:26px;
    font-weight:500;
    margin:16px auto;

    @media(max-width: 600px){
        font-size:18px;
    }
`;

