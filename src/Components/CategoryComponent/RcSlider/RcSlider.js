import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../../style/mixin';

const RcSlider = props => {
  const [value, setValue] = useState([3000, 750000]);

  const handleChange = event => {
    setValue(event);
  };

  return (
    <RcSliderContainer>
      <RangeInfo>가격대</RangeInfo>
      <PriceRange>{`${value[0]}원 ~ ${value[1]}원`}</PriceRange>
      <RcSliderBox>
        <RangeSlider
          min={3000}
          max={750000}
          defaultValue={[3000, 750000]}
          step={1000}
          allowCross={false}
          value={value}
          onChange={event => handleChange(event)}
          onAfterChange={props.handleSelectChange}
        />
      </RcSliderBox>
    </RcSliderContainer>
  );
};

const RcSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 0px;
`;

const RcSliderBox = styled.div`
  width: 100%;
  margin: 0px auto;
`;

const RangeInfo = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const PriceRange = styled.span`
  margin: 4px 0px 16px;
  font-size: 13px;
  color: ${props => props.theme.fontDarkGray};
`;

const RangeSlider = styled(Range)`
  ${flexCenter('flex', 'center', 'center')}
  width: calc(100% - 32px);
  height: 30px;
  margin: 0px auto;
  padding: 0px 16px;

  .rc-slider-handle {
    height: 28px;
    width: 28px;
    margin-top: -2px;
    background-color: ${props => props.theme.blueMain};
    border: 5px solid ${props => props.theme.white};
    box-shadow: 0px 0px 5px gray;
  }
`;

export default RcSlider;
