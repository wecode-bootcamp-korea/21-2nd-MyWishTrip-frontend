import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { flexCenter } from '../../style/mixin';
import { detailContext } from '../../utils/context';
import MoreButton from '../MoreButton';

export default function MiniReview() {
  const MoveToReview = () => {
    window.scrollTo(0, 3300, 'smooth');
  };

  const { data } = useContext(detailContext);

  console.log(data.product?.reviews[0].contents);

  return (
    <MiniReviewContainer>
      <MiniReviewLeft>
        <MiniReviewScore>{data.product?.total_score}</MiniReviewScore>
        <MiniReviewStar>★★★★★</MiniReviewStar>
        <MiniReviewCount>후기 {data.product?.total_review}</MiniReviewCount>
      </MiniReviewLeft>
      <MiniReviewRight>
        <StarUserWrapper>
          <RightReviewStar>★★★★★</RightReviewStar>
          <RightReviewUser>{data.product?.reviews[0].user}</RightReviewUser>
        </StarUserWrapper>
        <RightDescription>
          {data.product?.reviews[0].create_at.slice(0, 10)}
        </RightDescription>
        <ReviewParagraph>{data.product?.reviews[0].contents}</ReviewParagraph>
        <MoreButton onClick={MoveToReview}>후기 250개 전체 보기</MoreButton>
      </MiniReviewRight>
    </MiniReviewContainer>
  );
}

const MiniReviewContainer = styled.section`
  ${flexCenter('flex', 'center', 'flex-start')}
  flex-direction: row;
  width: 700px;
  padding: 32px 0px;
  border-top: 1px solid ${({ theme }) => theme.lineGray};
  border-bottom: 1px solid ${({ theme }) => theme.lineGray};
`;

const MiniReviewLeft = styled.div`
  margin-right: 26px;
`;
const MiniReviewScore = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.fontBlack};
`;
const MiniReviewStar = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.fontBlack};
`;
const MiniReviewCount = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.fontGray};
`;

const MiniReviewRight = styled.div`
  width: 610px;
`;

const StarUserWrapper = styled.div`
  ${flexCenter('flex', 'flex-start', 'center')}
  flex-direction: row;
  width: 610px;
`;

const RightReviewStar = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.blueMain};
`;

const RightReviewUser = styled.div`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.fontBlack};
`;

const RightDescription = styled.div`
  margin-top: 8px;
  margin-bottom: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.fontGray};
`;

const ReviewParagraph = styled.p`
  color: ${({ theme }) => theme.fontBlack};
  margin-bottom: 16px;
  font-size: 15px;
  line-height: 25px;
`;
