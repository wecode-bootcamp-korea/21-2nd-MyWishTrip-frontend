import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { detailContext } from '../../utils/context';
import { flexCenter } from '../../style/mixin';

export default function PhotoReview() {
  const { data } = useContext(detailContext);
  return (
    <PhotoReviewContainer>
      <SectionTitle>여행자 후기 사진</SectionTitle>
      <PhotoWrapper>
        <PhotoLi>
          <Photo src="/images/review_1.png" alt="photo" />
        </PhotoLi>
        <PhotoLi>
          <Photo src="/images/review2.png" alt="photo" />
        </PhotoLi>
        <PhotoLiLast>
          <PhotoReviewCount>+10</PhotoReviewCount>
          <Photo src="/images/review_3.png" alt="photo" />
        </PhotoLiLast>
      </PhotoWrapper>
    </PhotoReviewContainer>
  );
}

const PhotoReviewContainer = styled.section`
  border-top: 1px solid ${({ theme }) => theme.lineGray};
  width: 700px;
  padding: 32px 0px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.fontBlack};
`;

const PhotoWrapper = styled.ul`
  ${flexCenter('flex', 'space-between', 'center')}
  flex-direction: row;
  position: relative;
  cursor: pointer;
`;

const PhotoLi = styled.li`
  position: relative;
  width: 230px;
  height: 172px;
  border-radius: 4px;
  overflow: hidden;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 230px;
    height: 172px;
    background: rgba(0, 0, 0, 0);
    z-index: 1;
  }

  &:hover:before {
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-out;
  }
`;

const PhotoReviewCount = styled.span`
  position: absolute;
  left: calc(50% - 36px);
  top: calc(50% - 20px);
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.white};
  z-index: 2;
  opacity: 0.9;
`;

const PhotoLiLast = styled.li`
  position: relative;
  width: 230px;
  height: 172px;
  border-radius: 4px;
  overflow: hidden;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 230px;
    height: 172px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  &:hover:before {
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.2s ease-out;
  }
`;

const Photo = styled.img`
  width: 230px;
  height: 172px;
  border-radius: 4px;
`;
