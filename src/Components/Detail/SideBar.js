import React, { useState, useContext } from 'react';
import { detailContext } from '../../utils/context';
import styled from 'styled-components/macro';
import { flexCenter } from '../../style/mixin';

export default function SideBar() {
  const [isLiked, setIsLiked] = useState(false);
  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };
  const { data } = useContext(detailContext);
  return (
    <SideBarWrapper>
      <SideBarTop>
        <TopWrapper>
          <PriceWrapper>
            <SidePrice>
              {Number(data.product?.price).toLocaleString()}원
            </SidePrice>
            <OfferPrice>부터</OfferPrice>
          </PriceWrapper>
          <LinkIcon src="/images/external-link.svg" alt="icon" />
        </TopWrapper>
        <ReservationButton>예약하기</ReservationButton>
        <WishButton onClick={toggleHeart}>
          <HeartIcon
            src={isLiked ? `/images/heart.svg` : `/images/heart_fill.svg`}
            onClick={toggleHeart}
          />
          {isLiked ? `위시리스트에 담기` : `위시리스트에 추가됨`}
        </WishButton>
        <WishText>866명이 이 상품을 위시리스트에 담았습니다.</WishText>
      </SideBarTop>
      <SideBarBottom>
        <GuideWrapper>
          <GuideProfileImage src="/images/guide-profile.png" alt="photo" />
          <GuideName>WeGuide 위가이드</GuideName>
        </GuideWrapper>
        <QuestionWrapper>
          <MailIcon src="/images/mail.svg" alt="icon" />
          <QuestionLink>문의하기</QuestionLink>
        </QuestionWrapper>
      </SideBarBottom>
    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.aside`
  position: fixed;
  left: 780px;
  margin-top: 40px;
  width: 320px;
  border: 1px solid #dee2e6;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.white};
`;

const SideBarTop = styled.div`
  padding: 24px 24px 16px;
`;

const TopWrapper = styled.div`
  ${flexCenter('flex', 'space-between', 'center')}
`;

const PriceWrapper = styled.div`
  ${flexCenter('flex', 'flex-start', 'flex-end')}
`;

const SidePrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontBlack};
`;

const OfferPrice = styled.span`
  margin: 0px 0px 2px 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.fontGray};
`;

const LinkIcon = styled.img`
  padding-bottom: 2px;
  width: 22px;
  cursor: pointer;
`;

const ReservationButton = styled.button`
  margin: 16px 0px 8px 0px;
  width: 270px;
  height: 48px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.blueMedium};
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.blueMain};
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.3);
  }
`;

const WishButton = styled.button`
  ${flexCenter('flex', 'center', 'center')}
  width: 270px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ced4da;
  background-color: ${({ theme }) => theme.white};
  font-size: 14px;
  font-weight: 600;
  color: #495056;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.2);
  }
`;

const HeartIcon = styled.img`
  padding-bottom: 1px;
  margin-right: 5px;
  width: 20px;
`;

const WishText = styled.p`
  margin-top: 12px;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  color: #838c94;
`;

const SideBarBottom = styled.div`
  ${flexCenter('flex', 'space-between', 'center')}
  padding: 16px 24px;
  border-top: 1px solid #dee2e6;
`;

const GuideWrapper = styled.div`
  ${flexCenter('flex', 'center', 'center')}
`;

const GuideProfileImage = styled.img`
  width: 30px;
  border: 1px solid ${({ theme }) => theme.lineGray};
  border-radius: 50px;
`;

const GuideName = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontBlack};
`;

const QuestionWrapper = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  padding:6px;
  cursor: pointer;

  &:hover {
    background-color: #f5fbff;
    border-radius: 4px;
  }
`;

const MailIcon = styled.img`
  padding-bottom: 2px;
  margin-right: 5px;
  width: 20px;
`;

const QuestionLink = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.blueMain};
`;
