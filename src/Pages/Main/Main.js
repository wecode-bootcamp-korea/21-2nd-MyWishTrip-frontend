import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerSlider from '../../Components/Slider/BannerSlider/BannerSlider';
import CardSlider from '../../Components/Slider/CardSlider/CardSlider';
import CategorySlide from '../../Components/Slider/CategorySlide/CategorySlide';
import { flexCenter } from '../../style/mixin';

const Main = () => {
  const [slideData, setSlideData] = useState([]);

  const fetchData = () => {
    fetch('/data/CardSliderData.json')
      .then(response => response.json())
      .then(data => setSlideData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    slideData && (
      <Container>
        <ColorBackground />
        <CategorySlide slideData={slideData} />
        <BannerSlider />
        <CardSlider slideData={slideData} />
        <CardSlider slideData={slideData} />
        <CardSlider slideData={slideData} />
      </Container>
    )
  );
};

const Container = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  flex-direction: column;
`;

const ColorBackground = styled.div`
  position: absolute;
  top: 0px;
  height: 370px;
  width: 100%;
  background-color: ${props => props.theme.blueBackground};
  z-index: -1;
`;

export default Main;
