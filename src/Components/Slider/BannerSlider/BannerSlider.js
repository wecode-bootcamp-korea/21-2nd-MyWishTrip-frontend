import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { flexCenter } from '../../../style/mixin';

export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SlideContainer>
      <StyledSlider {...settings}>
        {DUMMY_SLIDE_IMAGE &&
          DUMMY_SLIDE_IMAGE.map((dimg, index) => (
            <SlideItem
              key={dimg.id}
              src={dimg.image_url}
              alt="배너 슬라이드 이미지"
            />
          ))}
      </StyledSlider>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  border-radius: 6px;
`;

const StyledSlider = styled(Slider)`
  ${flexCenter('flex', 'center', 'center')}
  margin: 40px 0px;
  width: 1060px;

  .slick-prev {
    left: 25px;
    z-index: 2;
  }

  .slick-next {
    right: 25px;
    z-index: 2;
  }
`;

const SlideItem = styled.img`
  height: 280px;
  border-radius: 6px;
`;

const DUMMY_SLIDE_IMAGE = [
  {
    id: 1,
    image_url: '/images/배너1.png',
  },
  {
    id: 2,
    image_url: '/images/배너2.png',
  },
  {
    id: 3,
    image_url: '/images/배너3.png',
  },
];
