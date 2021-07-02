import React, { useContext } from 'react';
import { detailContext } from '../../utils/context';
import styled from 'styled-components/macro';
import { flexCenter } from '../../style/mixin';
import ReviewList from './ReviewList';
import MoreButton from '../MoreButton';

export default function ReviewSection() {
  const { data } = useContext(detailContext);

  return (
    <ReviewContainer>
      <TitleWrapper>
        <SectionTitle>후기</SectionTitle>
        <ReviewCount>{data.product?.total_review}</ReviewCount>
      </TitleWrapper>
      <ReviewWrapper>
        <StartScoreWrapper>
          <Score>{data.product?.total_score}</Score>
          <Star>★★★★★</Star>
        </StartScoreWrapper>
        <RatingWrapper>
          <Description>혼자 가는 여행으로 구매가 많은 상품</Description>
          <RatingUl>
            {STAR_RATING.map((rate, index) => (
              <RatingList key={index}>
                <RatingStar>{rate.star}</RatingStar>
                <RatingBar></RatingBar>
                <RatingCount>{rate.count}</RatingCount>
              </RatingList>
            ))}
          </RatingUl>
        </RatingWrapper>
      </ReviewWrapper>
      <UserReviewWrapper>
        {data &&
          data.product?.reviews?.map((review, index) => (
            <ReviewList key={index} review={review} />
          ))}
      </UserReviewWrapper>
      {/* <MoreButtonWrapper>
        <MoreButton>후기 더 보기</MoreButton>
        <MoreGradient></MoreGradient>
      </MoreButtonWrapper> */}
    </ReviewContainer>
  );
}

const ReviewContainer = styled.section`
  ${flexCenter('flex', 'center', 'flex-start')}
  flex-direction: column;
  padding-top: 32px;
  width: 700px;
  border-top: 1px solid ${({ theme }) => theme.lineGray};
`;

const TitleWrapper = styled.div`
  ${flexCenter('flex', 'flex-start', 'center')}
  flex-direction: row;
`;

const SectionTitle = styled.span`
  margin-bottom: 24px;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontBlack};
`;

const ReviewCount = styled.span`
  margin: 0px 0px 24px 8px;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.blueMain};
`;

const ReviewWrapper = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  flex-direction: row;
  margin-bottom: 16px;
`;

const StartScoreWrapper = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  flex-direction: column;
  margin-right: 8px;
  width: 217px;
  height: 165px;
  border-radius: 4px;
  background-color: #f8f9fa;
  font-weight: 700;
  color: ${({ theme }) => theme.blueMain};
`;

const Score = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontBlack};
`;
const Star = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontBlack};
`;

const RatingWrapper = styled.div`
  padding: 32px 0px;
  width: 400px;
  height: 165px;
  border-radius: 4px;
  background-color: #f8f9fa;
  font-weight: 500;
  color: ${({ theme }) => theme.blueMain};
`;

const RatingUl = styled.ul`
  ${flexCenter('flex', 'center', 'flex-end')}
  flex-direction: column;
`;

const Description = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const RatingList = styled.div`
  ${flexCenter('flex', 'flex-end', 'center')}
  flex-direction: row;
  margin: 3px 0px;
`;

const RatingStar = styled.span`
  font-size: 12px;
`;

const RatingBar = styled.div`
  margin-left: 8px;
  width: 256px;
  height: 4px;
  border-radius: 10px;
  background-color: #dee2e6;
`;

const RatingCount = styled.span`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 400;
  width: 50px;
  color: ${({ theme }) => theme.fontGray};
`;

const UserReviewWrapper = styled.ul`
  margin-top: 24px;
`;

const MoreButtonWrapper = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  width: 100%;
`;

const MoreGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
  text-align: center;
  z-index: 5;
`;

const STAR_RATING = [
  { star: '★★★★★', rating: 100, count: 4 },
  { star: '★★★★', rating: 0, count: 1 },
  { star: '★★★', rating: 0, count: 1 },
  { star: '★★', rating: 0, count: 0 },
  { star: '★', rating: 0, count: 0 },
];
