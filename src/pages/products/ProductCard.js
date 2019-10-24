import React, { useState } from "react";
import styled from "styled-components";
import { Favorite, Cart, View } from "grommet-icons";

const ProductCard = props => {
  const Card = styled.div`
    height: calc((100vw / 3) - 8px);
    width: calc((100vw / 3) - 8px);
    margin: 1px;
    min-height: 300px;
    min-width: 300px;
    background: #ededed;
  `;

  const Title = styled.h2`
    margin: 0;
    font-size: 1.6em;
    font-family: "Maven Pro";
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    transition: color 0.5s ease;

    :hover {
      color: #587458;
    }
  `;

  const Price = styled.h2`
    margin: 0;
    font-size: 1.3em;
    font-family: "Maven Pro";
    text-transform: uppercase;
    text-align: center;
    transition: color 0.5s ease;

    :hover {
      color: #587458;
    }
  `;

  const Photo = styled.div`
    width: 50%;
    height: 50%;
    margin-top: 10%;
    margin-bottom: 10%;
    margin-left: 25%;
    margin-right: 25%;
    background-color: #565985;
    background-image: url(${props.img1});
    background-position: center;
    background-size: cover;
    transition: all 0.6s ease;

    :hover {
      width: 60%;
      height: 60%;
      margin-top: 5%;
      margin-bottom: 5%;
      margin-left: 20%;
      margin-right: 20%;
      background-color: transparent;
      background-image: url(${props.img2});
    }
  `;

  const ActionsDiv = styled.div`
    margin-top: 30px;
    text-align: center;

    > * {
      margin-left: 15px;
      margin-right: 15px;
      
    }
  `;
  return (
    <Card>
      <Photo></Photo>
      <Title>{props.title}</Title>
      <Price>$ {props.price},00</Price>
      <ActionsDiv>
        <Favorite></Favorite>
        <Cart></Cart>
        <View></View>
      </ActionsDiv>
    </Card>
  );
};

export default ProductCard;
