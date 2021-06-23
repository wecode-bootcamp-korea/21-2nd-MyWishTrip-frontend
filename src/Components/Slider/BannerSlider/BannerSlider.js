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
          DUMMY_SLIDE_IMAGE.map(dimg => (
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
    image_url:
      'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-flat-pink-e-commerce-banner-background-image_163039.jpg',
  },
  {
    id: 2,
    image_url:
      'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-taobao-women-s-banner-background-image_154329.jpg',
  },
  {
    id: 3,
    image_url:
      'https://png.pngtree.com/thumb_back/fw800/back_pic/05/13/06/41599d2ab7d742f.jpg',
  },
  {
    id: 4,
    image_url:
      'https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-summer-refreshing-banner-background-claritycandycute-backgroundsummer-image_52755.jpg',
  },
  {
    id: 5,
    image_url:
      'https://png.pngtree.com/thumb_back/fw800/back_our/20200701/ourmid/pngtree-simple-memphis-banner-background-image_345834.jpg',
  },
  {
    id: 6,
    image_url: 'https://img.lovepik.com/photo/50045/2454.jpg_wh860.jpg',
  },
  {
    id: 7,
    image_url:
      'https://blog.kakaocdn.net/dn/Rb5PG/btqCjSxEdGn/SulgKzVr3Bdo2pnrBCGRLk/img.png',
  },
];
