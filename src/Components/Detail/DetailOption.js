import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { flexCenter, Icon } from '../../style/mixin';
import Calendar from './Calendar';
import Modal from './Modal';
import PriceResult from '../../Components/Detail/PriceResult';
import { detailContext } from '../../utils/context';

export default function DetailOption() {
  const {
    isModalClicked,
    setIsModalClicked,
    setNumber,
    handleCount,
    setSelectedItem,
    data,
    visible,
    setVisible,
  } = useContext(detailContext);

  const check = () => {
    setSelectedItem(handleCount);
    setVisible(true);
  };

  const handleModal = () => {
    setIsModalClicked(!isModalClicked);
  };

  const handleModalOff = e => {
    const clicked = e.target.closest('.option');
    if (clicked) return;
    else {
      setIsModalClicked(false);
    }
  };

  const allZero = () => {
    const arr = handleCount;
    if (arr.every(i => i === 0)) {
      return true;
    } else return false;
  };

  return (
    <DetailOptionContainer onClick={e => handleModalOff(e)}>
      <OptionTitle>
        옵션 선택
        <OptionQuestion>금액 조회하기가 무엇인가요?</OptionQuestion>
      </OptionTitle>
      <OptionWrapper>
        <Calendar />
        <OptionSelector onClick={handleModal} className="option">
          <FilterIcon src="/images/filter_fill.svg" alt="icon" />
          {allZero() ? (
            <OptionText>옵션을 선택해주세요.</OptionText>
          ) : (
            <OptionText>
              {handleCount.map(
                (count, index) =>
                  count !== 0 && data.product?.options[index].name + ` `
              )}
            </OptionText>
          )}
          {isModalClicked && <Modal setNumber={setNumber} />}
        </OptionSelector>
        {allZero() ? (
          <OptionButtonZero onClick={check}>금액 조회하기</OptionButtonZero>
        ) : (
          <OptionButton onClick={check}>금액 업데이트</OptionButton>
        )}
      </OptionWrapper>
      {visible && <PriceResult />}
    </DetailOptionContainer>
  );
}

const DetailOptionContainer = styled.article`
  ${flexCenter('flex', 'center', 'flex-start')}
  flex-direction: column;
  padding-bottom: 16px;
`;

const OptionTitle = styled.h2`
  ${flexCenter('flex', 'space-between', 'flex-end')}
  flex-direction: row;
  width: 700px;
  margin: 40px 0px 20px 0px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.25;
  color: ${({ theme }) => theme.fontBlack};
`;

const OptionQuestion = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
  color: ${({ theme }) => theme.blueMain};
  cursor: pointer;
  &:hover {
    color: #025ba5;
  }
`;

const OptionWrapper = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  flex-direction: row;
`;

const OptionSelector = styled.div`
  ${flexCenter('flex', 'flex-start', 'center')}
  position: relative;
  flex-direction: row;
  margin-right: 10px;
  padding-right: 5px;
  width: 255px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.whiteGray};
  background-color: ${({ theme }) => theme.whiteGray};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.fontGray};
  }
`;

const FilterIcon = styled.img`
  ${Icon}
`;

const OptionText = styled.p`
  width: 100%;
  height: 16px;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.fontBlack};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const OptionButton = styled.button`
  width: 170px;
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
  }
`;

const OptionButtonZero = styled.button`
  width: 170px;
  height: 48px;
  border-radius: 4px;
  border: none;
  background-color: #cbe6fd;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;
