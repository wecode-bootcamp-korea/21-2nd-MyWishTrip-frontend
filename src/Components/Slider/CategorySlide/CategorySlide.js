import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { flexCenter } from '../../../style/mixin';
import { withRouter } from 'react-router-dom';

export default withRouter(props => {
  const goToRegion = (region, landmark) => {
    props.history.push({
      pathname: `/products`,
      state: { region: region, landmark: landmark },
    });
  };

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
    props.regionData && (
      <SlideContainer>
        <SlideTitle>
          <Title>어디로 떠나세요?</Title>
        </SlideTitle>
        <SlideBox>
          <StyledSlider {...settings}>
            {props.regionData &&
              props.regionData.map((region, index) => (
                <div key={region.id}>
                  <CategoryItem>
                    <CategoryImg
                      src={`/images/slideImage/메인${index + 1}.png`}
                      alt="카테고리 이미지"
                    />
                    <CategoryInfo>
                      <CategoryTitle>{region.name}</CategoryTitle>
                    </CategoryInfo>
                    <CategoryButton
                      onClick={() => goToRegion(region.name, region.landmark)}
                    >
                      둘러보기
                    </CategoryButton>
                  </CategoryItem>
                </div>
              ))}
          </StyledSlider>
        </SlideBox>
      </SlideContainer>
    )
  );
});

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
  ${flexCenter('flex', 'flex-start', 'center')}
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

const CategoryItem = styled.div`
  ${flexCenter('flex', 'space-between', 'flex-start')}
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 310px;
  border-radius: 8px;
  overflow: hidden;
`;

const CategoryImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 325px;
  z-index: -1;

  &:hover {
    transform: scale(1.1);
    transition: transform 3s linear;
  }
`;

const CategoryInfo = styled.div`
  ${flexCenter('flex', 'space-between', 'flex-start')}
  flex-direction: column;
  margin: 35px 0px 0px 25px;
  font-weight: 600;
  color: ${props => props.theme.white};
  z-index: 2;
`;

const CategoryTitle = styled.span`
  margin-bottom: 15px;
  font-size: 24px;
  color: ${props => props.theme.white};
`;

const CategoryButton = styled.button`
  all: unset;
  margin: 0px 0px 35px 25px;
  padding: 10px 15px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${props => props.theme.white};
  cursor: pointer;
  z-index: 2;
`;
