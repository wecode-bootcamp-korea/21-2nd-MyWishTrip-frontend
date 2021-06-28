import { useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../../style/mixin';

const CategoryCheck = props => {
  // const [isChecked, setIsChecked] = useState(arr)

  return (
    <RatingContainer>
      <RatingTitle>평점</RatingTitle>
      <RatingInputContainer>
        <RatingInput
          type="radio"
          name="rating"
          value=""
          onClick={props.handleRatingClick}
          defaultChecked
        />
        <RatingInputLabel htmlFor="rating">전체보기</RatingInputLabel>
      </RatingInputContainer>
      <RatingInputContainer>
        <RatingInput
          type="radio"
          name="rating"
          value="4~5"
          onClick={props.handleRatingClick}
        />
        <RatingInputLabel htmlFor="rating">4점 이상</RatingInputLabel>
      </RatingInputContainer>
      <RatingInputContainer>
        <RatingInput
          type="radio"
          name="rating"
          value="5~5"
          onClick={props.handleRatingClick}
        />
        <RatingInputLabel htmlFor="rating">5점만</RatingInputLabel>
      </RatingInputContainer>
    </RatingContainer>
  );
};

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  border-bottom: 1px solid ${props => props.theme.lineGray};
`;

const RatingTitle = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const RatingInputContainer = styled.div`
  ${flexCenter('flex', 'flex-start', 'center')}
  padding: 8px 0px;
`;

const RatingInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 0px;
  cursor: pointer;
`;

const RatingInputLabel = styled.label`
  margin-left: 8px;
  font-size: 14px;
`;

const RATING_DATA = [
  {
    label: '전체보기',
    value: '',
  },
  {
    label: '4점 이상',
    value: '4~5',
  },
  {
    label: '5점만',
    value: '5~5',
  },
];

export default CategoryCheck;
