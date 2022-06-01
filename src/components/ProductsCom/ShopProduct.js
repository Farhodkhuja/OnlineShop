import  React from 'react'
import styled from 'styled-components'




export function ShopProduct(props) {
    return(
        <DetailsContainer>
            <SmallText>I.Tech</SmallText>
            <BuyButton>Buy</BuyButton>
        </DetailsContainer>
    )
    
}
const BuyButton = styled.button`
    margin-top: 300px;
    left: 210px;
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: #fbbc01;
    color: black;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    border: 2px solid transparent;
    outline: none;
    cursor: pointer;
    transition: all 290ms ease-in-out;
    border-radius: 8px;
    &:hover{
        background-color: transparent;
        color: #fff;
        border: 3px solid #fbbc01; 
    }
`;

const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.5em 0 6px;
    line-height: 1.4;
`;


const SmallText = styled.span`
    margin-top: 300px;
    left: 10px;
    position: absolute;
    font-size: 16px;
    color: #fff;
    font-weight: 700;
    ext-transform: uppercase
`;

export default ShopProduct
