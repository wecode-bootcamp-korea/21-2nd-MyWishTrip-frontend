import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';
import DetailHeader from '../../Components/Detail/DetailHeader';
import DetailOption from '../../Components/Detail/DetailOption';
import MiniReview from '../../Components/Detail/MiniReview';
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
    axios.get('http://10.58.3.147:8000/products/18').then(res => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    data.product && setHandleCount(Array(data.product.options.length).fill(0));
  }, [data]);

  return (
    <Article>
      <detailContext.Provider value={detail}>
        <DetailContainer>
          <DetailHeader />
          <DetailOption />
          <DetailImage>
            <DetailPhoto
              src="/images/jeju_1.jpg"
              alt="detail_image"
            ></DetailPhoto>
            <MoreButton>상품 설명 더 보기</MoreButton>
          </DetailImage>
          <MiniReview />
          <Information />
          <PhotoReview />
          <Review />
        </DetailContainer>
        <SideBar />
      </detailContext.Provider>
    </Article>
  );
}

const Article = styled.article`
  ${flexCenter('flex', 'flex-start', 'flex-start')}
  flex-direction: row;
`;

const DetailContainer = styled.article`
  ${flexCenter('flex', 'center', 'flex-start')}
  flex-direction: column;
  margin: 40px;
  width: 700px;
  position: relative;
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
