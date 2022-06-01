import React from "react";
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Data from '../../data';
import styled from 'styled-components'
import ShopProduct from './ShopProduct'




const ProductsCom = ()=>{

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
    let data = Data.map(el=>{
        return(
         <CardWrapper>       
          <CardContainer style={{ x, y, rotateX, rotateY, z: 100}} 
                drag dragElastic={0.16} 
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{ cursor: 'grabbing' }} >
            <TopCantainer>
               <CircleWrapper>
                    <Circle >
                    </Circle>
                </CircleWrapper>
                <ShopWrapper>
                    <ShopBrend style={{x, y, rotateX, rotateY, z: 100000}}
                        drag 
                        dragElastic={0.12} 
                        whileTap={{ cursor: 'grabbing' }}
                    >
                        <img src={el.image} alt="Photo"/>
                    </ShopBrend>
                </ShopWrapper>
                <ShopText>{el.brand}</ShopText>
                    <MediText>{el.price + '$'}</MediText>
                <SpacedHorizonatlContainer>
                    <MediumText>{el.name}</MediumText>
                </SpacedHorizonatlContainer>
            </TopCantainer>
                <BottomCantainer>
                    <ShopProduct/>
                </BottomCantainer>
             </CardContainer>
        </CardWrapper> 
        )
    })
    return(
        <div>
            {data}
        </div>
    )
}

const CardWrapper = styled.div`
    width: 100%;
    perspective: 2000;
    display: flex;
    justify-content: space-around;
`;

const CardContainer = styled(motion.div)`
    margin: 20px;
    width: 285px;
    height: 500px;
    display: flex;
    border-radius: 25px;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    background-color: #1d1f21;
    color: white;
    position: relative;
    cursor: grab;

`;

const CircleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    border-bottom-right-radius: 25px;  
`;
const Circle = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    top: -4.2em;
    right: -10em;
    z-index: 5;
    background-color: #fbbe01;
    border-radius: 50%;
`;

const TopCantainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    flex: 1.2;
    padding: 1em 15px;
    align-items: center;
    justify-content: flex-end;
`;
const BottomCantainer = styled.div`
    position: absolute;
    display: flex;
    padding: 0 lem;
`;
const ShopText = styled.h1`
    color: #fff;
    position: relative;
    padding-top: 500px;
    text-transform: uppercase;
    margin: 160px;
    z-index: 10;
    font-size: 55px;
    font-weight: 800;
`;

const ShopWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ShopBrend = styled(motion.div)`
    width: auto;
    height: 190px;
    z-index: 99;
    user-select: none;
    img{
        border-radius: 25px;
        opacity: 10;
        width: auto;
        height: 100%;
        user-select: none;
    }
`;

const SpacedHorizonatlContainer = styled.span`
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
`;
const MediText = styled.span`
    font-size: 18px;
    color: #fbbc01;
    font-weight: 800;
    text-transform: uppercase;
`;
const MediumText = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
`

export default ProductsCom;

