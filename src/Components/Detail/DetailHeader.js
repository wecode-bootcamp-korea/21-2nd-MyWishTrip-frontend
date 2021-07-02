import React, { useContext } from 'react';
import { detailContext } from '../../utils/context';
import styled from 'styled-components/macro';
import { flexCenter } from '../../style/mixin';

export default function DetailHeader() {
  const { data } = useContext(detailContext);
  return (
    <>
      <HeaderContainer>
        <LocationWrapper>
          <DetailLocation>대한민국</DetailLocation>
          <RightArrow src="images/right-arrow.svg" alt="icon" />
          <LocationIcon src="images/location_fill.svg" alt="icon" />
          <DetailLocation>제주도</DetailLocation>
        </LocationWrapper>
        <DetailTitle>{data.product?.name}</DetailTitle>
        <ReviewWrapper>
          <ReviewStar>★★★★★</ReviewStar>
          <ReviewScore>{data.product?.total_score}</ReviewScore>
          <ReviewCount>({data.product?.total_review})</ReviewCount>
        </ReviewWrapper>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.article`
  ${flexCenter('flex', 'center', 'flex-start')}
  flex-direction: column;
  width: 700px;
`;

const LocationWrapper = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  flex-direction: row;
  margin-bottom: 10px;
`;

const DetailLocation = styled.span`
  padding: 6px 8px 6px 0px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.fontGray};
`;

const RightArrow = styled.img`
  margin: 0px 5px 2px 0px;
  height: 16px;
`;

const LocationIcon = styled.img`
  margin: 0px 5px 3px 0px;
  height: 16px;
`;

const DetailTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  color: ${({ theme }) => theme.fontBlack};
`;

const ReviewWrapper = styled.div`
  ${flexCenter('flex', 'center', 'flex-start')}
  flex-direction: row;
`;

const ReviewStar = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.blueMain};
`;

const ReviewScore = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.fontBlack};
`;

const ReviewCount = styled.span`
  margin-left: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.fontGray};
`;
