import React from 'react';
import styled from 'styled-components/macro';
import { flexCenter } from '../../style/mixin';
import MoreButton from '../MoreButton';

export default function MiniReview() {
  const MoveToReview = () => {
    window.scrollTo(0, 3300, 'smooth');
  };

  return (
    <MiniReviewContainer>
      <MiniReviewLeft>
        <MiniReviewScore>5.0</MiniReviewScore>
        <MiniReviewStar>★★★★★</MiniReviewStar>
        <MiniReviewCount>후기 250개</MiniReviewCount>
      </MiniReviewLeft>
      <MiniReviewRight>
        <StarUserWrapper>
          <RightReviewStar>★★★★★</RightReviewStar>
          <RightReviewUser>So*****</RightReviewUser>
        </StarUserWrapper>
        <RightDescription>20대·여행·2021-06-18</RightDescription>
        <ReviewParagraph>
          본태박물관을 도슨트투어 없이 관람하는 것은 무의미하다고 생각합니다!
          특히 김현근 가이드님의 쉽고 재밌는 설명 덕분에 3시간이 넘은
          시간이었음에도 시간 가는 줄 모르고 몰입할 수 있었어요! 다음에 다른
          도슨트 투어를 하신다면 꼭 신청하겠습니다!!
        </ReviewParagraph>
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
