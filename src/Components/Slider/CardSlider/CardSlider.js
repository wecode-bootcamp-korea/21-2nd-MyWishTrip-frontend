import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { flexCenter } from '../../../style/mixin';
import Card from '../../Card/Card';

export default props => {
  const PrevArrow = props => {
    const { className, onClick } = props;

    return (
      <PrevButton className={className} onClick={onClick}>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0IDZsLTYgNi4wMDNMMTMuOTkzIDE4Ii8+Cjwvc3ZnPgo="
          alt="prev"
        />
      </PrevButton>
    );
  };

  const NextArrow = props => {
    const { className, onClick } = props;

    return (
      <NextButton className={className} onClick={onClick}>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDZsNiA2LjAwM0wxMC4wMDcgMTgiLz4KPC9zdmc+Cg=="
          alt="next"
        />
      </NextButton>
    );
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    props.slideData && (
      <SlideContainer>
        <SlideTitle>
          <Title>I 💙 SEOUL 💙 YOU </Title>
          <span>더보기</span>
        </SlideTitle>
        <SlideBox>
          <StyledSlider {...settings}>
            {props.slideData &&
              props.slideData.map((data, index) => {
                return <Card key={index} data={data} />;
              })}
          </StyledSlider>
        </SlideBox>
      </SlideContainer>
    )
  );
};

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1080px;
  margin: 40px 0px;
`;

const SlideBox = styled.div`
  ${flexCenter('flex', 'center', 'center')}
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
`;

const SlideTitle = styled.span`
  ${flexCenter('flex', 'space-between', 'flex-end')}
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  ${flexCenter('flex', 'center', 'center')}
  position: relative;
  margin-top: 30px;
  width: 1080px;
  z-index: 1;

  .slick-slide {
    max-width: 250px;
    margin: 0px 10px;
    z-index: 1;
  }

  .slick-disabled {
    display: none;
  }

  .slick-arrow {
    color: ${props => props.theme.white};
    background: ${props => props.theme.white};
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 6px 0 rgb(0 0 0 / 5%),
      0 4px 12px 0 rgb(0 0 0 / 5%);
  }

  .slick-next::before {
    all: unset;
    ${flexCenter('flex', 'center', 'center')}
    height: 40px;
    width: 40px;
    position: absolute;
    right: -15px;
    z-index: 2;
    border-radius: 50%;
    border: 1px solid #848c94;
    background: white;
    cursor: pointer;
  }

  .slick-prev::before {
    all: unset;
    ${flexCenter('flex', 'center', 'center')}
    height: 40px;
    width: 40px;
    position: absolute;
    left: -15px;
    z-index: 2;
    border: 1px solid #848c94;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
  }
`;

const SlideItem = styled.img`
  display: flex;
  width: 100%;
  height: 310px;
`;

const PrevButton = styled.button`
  all: unset;
  ${flexCenter('flex', 'center', 'center')}
  height: 40px;
  width: 40px;
  position: absolute;
  left: -15px;
  z-index: 2;
  border: 1px solid gray;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
`;

const NextButton = styled.button`
  all: unset;
  ${flexCenter('flex', 'center', 'center')}
  height: 40px;
  width: 40px;
  position: absolute;
  right: -15px;
  z-index: 2;
  border-radius: 50%;
  border: 1px solid gray;
  background-color: white;
  cursor: pointer;
`;
