import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';
import DetailHeader from '../../Components/Detail/DetailHeader';
import DetailOption from '../../Components/Detail/DetailOption';
import MiniReview from '../../Components/Detail/MiniReview';
import CardSlider from '../../Components/Slider/CardSlider/CardSlider';
import SideBar from '../../Components/Detail/SideBar';
import MoreButton from '../../Components/MoreButton';
import PhotoReview from '../../Components/Detail/PhotoReview';
import Review from '../../Components/Detail/ReviewSection';
import Information from '../../Components/Detail/Information';
import { detailContext } from '../../utils/context';
import { flexCenter } from '../../style/mixin';

export default function Detail() {
  const [amount, setAmount] = useState(0);
  const [isModalClicked, setIsModalClicked] = useState(false);
  const [data, setData] = useState([]);
  const [slideData, setSlideData] = useState([]);
  const [handleCount, setHandleCount] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [visible, setVisible] = useState(false);

  const detail = {
    amount,
    setAmount,
    isModalClicked,
    setIsModalClicked,
    handleCount,
    setHandleCount,
    selectedItem,
    setSelectedItem,
    data,
    visible,
    setVisible,
  };
  //data/detail.json
  //http://10.58.3.147:8000/products/18

  useEffect(() => {
    axios.get('http://52.79.237.167:8000/products/18').then(res => {
      setData(res.data);
    });

    axios.get('http://52.79.237.167:8000/products').then(res => {
      setSlideData(res.data.products);
    });
  }, []);

  // useEffect(() => {
  //   axios.get('http://52.79.237.167:8000/products').then(res => {
  //     console.log(res);
  //   });
  // }, []);

  useEffect(() => {
    data.product && setHandleCount(Array(data.product.options.length).fill(0));
  }, [data]);

  return (
    <FlexWrapper>
      <Article>
        <detailContext.Provider value={detail}>
          <DetailContainer>
            <DetailHeader />
            <DetailOption />
            <DetailImage>
              <DetailPhoto
                src="/images/scuba_diving.jpg"
                alt="detail_image"
              ></DetailPhoto>
              <MoreButton>상품 설명 더 보기</MoreButton>
            </DetailImage>
            <MiniReview />
            <SliderWrapper>
              <CardSlider slideData={slideData} />
            </SliderWrapper>
            <Information />
            <PhotoReview />
            <Review />
          </DetailContainer>
          <SideBar />
        </detailContext.Provider>
      </Article>
    </FlexWrapper>
  );
}

const SliderWrapper = styled.div`
  width: 700px;
  overflow: hidden;
`;

const FlexWrapper = styled.div`
  ${flexCenter('flex', 'center', 'flex-start')}
  width:100%;
  position: relative;
`;

const Article = styled.div`
  ${flexCenter('flex', 'space-between', 'flex-start')}
  flex-direction: row;
  width: 1075px;
  padding-left: 20px;
`;

const DetailContainer = styled.article`
  ${flexCenter('flex', 'center', 'flex-start')}
  flex-direction: column;
  margin-top: 60px;
  width: 700px;
`;

const DetailImage = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  flex-direction: column;
  padding: 32px 0px;
  width: 700px;
  border-top: 1px solid ${({ theme }) => theme.lineGray};
`;

const DetailPhoto = styled.img`
  margin-bottom: 32px;
  width: 700px;
`;
