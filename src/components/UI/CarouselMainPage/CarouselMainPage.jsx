import React from "react";
import { Carousel } from "react-bootstrap";
import Styled from "styled-components";
import imagem1 from "../../../logo.svg";
import { useState } from "react";


const CarouselStyled = Styled(Carousel)`
  margin-bottom: 100px;
  margin: flex;
`;

function CarouselMainPage() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  

  return (

    
    <CarouselStyled >
      <Carousel.Item>
        <img
          height="360px"
          className="d-block w-100"
          src={imagem1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          height="360px"
          className="d-block w-100"
          src={imagem1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          height="360px"
          className="d-block w-100"
          src={imagem1}
          alt="First slide"
        />
      </Carousel.Item>

    </CarouselStyled>
  );
}

export default CarouselMainPage;
