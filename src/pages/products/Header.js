import React from "react";
import styled from "styled-components";

const Header = () => {
  const DivHead = styled.div`
    height: calc(100vh - 80px);
    background-color: #a1928b;
    background-image: linear-gradient(to right, rgba(20,45,244,0.6), rgba(255,65,87,0.3)), url("https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_960_720.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Title = styled.h1`
    color: white;
    margin-bottom: 70px; 
    font-family: "Maven Pro";
    font-size: 5em;
    font-weight: 500;
    text-transform: uppercase;
  `;

  const Button = styled.button`
    background-color: white;
    padding: 25px 30px 25px 30px;
    border: rgba(0, 0, 0, 0) 1px solid;
    transition: all 0.3s ease;
    font-family: "Maven Pro";
    font-size: 1em;
    text-transform: uppercase;
    z-index: 2000;
    :hover {
      color: white;
      background-color: #EC8676;
      border: white 1px solid;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    }
  `;

  const Quadrado = styled.div`
    height: 30%;
    width: 40%;
    position: absolute;
    border: rgba(255,255,255,0.3) 1px solid;
  `
  return (
    <DivHead>
      <div>
        <Title>Sua bolsa do seu jeito</Title>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button>Comprar agora</Button>
        </div>
      </div>
      <Quadrado></Quadrado>
    </DivHead>
  );
};

export default Header;
