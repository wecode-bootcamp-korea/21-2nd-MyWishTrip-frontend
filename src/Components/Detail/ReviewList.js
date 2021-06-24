import React from 'react';
import styled from 'styled-components/macro';
import { flexCenter } from '../../style/mixin';

export default function ReviewList(props) {
  const { score, user, create_at, contents } = props.review;
  return (
    <ReviewListWrapper>
      <StarUserWrapper>
        <ReviewStar>{score}</ReviewStar>
        <ReviewUser>{user}</ReviewUser>
      </StarUserWrapper>
      <UserDescription>{create_at}</UserDescription>
      <ReviewParagraph>{contents}</ReviewParagraph>
      <GrayLine></GrayLine>
    </ReviewListWrapper>
  );
}

const ReviewListWrapper = styled.li`
  margin-bottom: 32px;
  width: 700px;
`;

const StarUserWrapper = styled.div`
  ${flexCenter('flex', 'flex-start', 'center')}
  flex-direction: row;
  width: 610px;
`;

const ReviewStar = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.blueMain};
`;

const ReviewUser = styled.div`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.fontBlack};
`;

const UserDescription = styled.div`
  margin-top: 8px;
  margin-bottom: 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.fontGray};
`;

const ReviewParagraph = styled.p`
  color: ${({ theme }) => theme.fontBlack};
  margin-bottom: 32px;
  font-size: 15px;
  line-height: 25px;
`;

const GrayLine = styled.div`
  width: 700px;
  border-top: 1px solid #dee2e6;
`;
