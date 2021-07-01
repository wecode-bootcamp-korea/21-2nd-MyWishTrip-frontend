import styled from 'styled-components';
import { flexCenter } from '../../../style/mixin';

const LandMark = props => {
  return (
    <LandmarkContainer>
      <LandmarkTitle>여행지</LandmarkTitle>
      <LandmarkSubTitle>명소</LandmarkSubTitle>
      {props.landmarkTitle.map((title, index) => (
        <LandmarkSelector
          key={index}
          onClick={event => props.handleLandmarkClick(event)}
        >
          <LandmarkCheckBox type="checkbox" name="landmark" value={title} />
          <LandmarkName htmlFor="">{title}</LandmarkName>
        </LandmarkSelector>
      ))}
    </LandmarkContainer>
  );
};

const LandmarkContainer = styled.div`
  padding: 24px 0px;
`;

const LandmarkTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;

const LandmarkSubTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 13px;
  color: ${props => props.theme.fontDarkGray};
`;

const LandmarkSelector = styled.div`
  ${flexCenter('flex', 'flex-start', 'center')}
  padding: 8px 0px;
`;

const LandmarkName = styled.label`
  padding-left: 8px;
  font-size: 14x;
  cursor: pointer;
`;

const LandmarkCheckBox = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export default LandMark;
