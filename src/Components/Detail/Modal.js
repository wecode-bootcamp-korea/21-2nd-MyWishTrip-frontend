import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { flexCenter } from '../../style/mixin';
import { detailContext } from '../../utils/context';

export default function Modal() {
  const { handleCount, setHandleCount, data } = useContext(detailContext);

  const onIncrease = id => {
    setHandleCount(
      handleCount.map((count, index) => {
        return id === index ? count + 1 : count;
      })
    );
  };

  const onDecrease = id => {
    setHandleCount(
      handleCount.map((count, index) => {
        return id === index ? (count < 1 ? 0 : count - 1) : count;
      })
    );
  };

  return (
    <ModalContainer onClick={e => e.stopPropagation()}>
      {data &&
        data.product?.options.map((option, index) => (
          <div key={index}>
            <ItemList>
              <ItemWrapper>
                <ItemName>
                  {option.name}
                  <ItemDescription>1인 가격</ItemDescription>
                </ItemName>
              </ItemWrapper>
              <CountWrapper>
                {handleCount[index] === 0 ? (
                  <CountDownButtonZero>
                    <DownIcon src="/images/remove_gray.svg" alt="icon" />
                  </CountDownButtonZero>
                ) : (
                  <CountDownButton onClick={() => onDecrease(index)}>
                    <DownIcon src="/images/remove.svg" alt="icon" />
                  </CountDownButton>
                )}
                <CountNum>{handleCount[index]}</CountNum>
                <CountUpButton onClick={() => onIncrease(index)}>
                  <UpIcon src="/images/add.svg" alt="icon" />
                </CountUpButton>
              </CountWrapper>
            </ItemList>
            {index !== data.product?.options.length - 1 && (
              <GrayLine></GrayLine>
            )}
          </div>
        ))}
    </ModalContainer>
  );
}

const ModalContainer = styled.ul`
  position: absolute;
  top: 57px;
  left: 0px;
  width: 428px;
  border: 1px solid #ddddde;
  border-radius: 2px;
  background-color: #fff;
`;

const ItemList = styled.li`
  ${flexCenter('flex', 'space-between', 'flex-start')}
  flex-direction: row;
  padding: 16px;
`;

const ItemWrapper = styled.div``;

const ItemName = styled.p`
  ${flexCenter('flex', 'flex-start', 'flex-start')}
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  color: #343a40;
`;

const ItemDescription = styled.span`
  font-size: 11px;
  color: #666d75;
  margin-top: 10px;
`;

const CountWrapper = styled.div`
  ${flexCenter('flex', 'center', 'center')}
`;

const UpIcon = styled.img`
  width: 16px;
`;
const DownIcon = styled.img`
  width: 16px;
`;

const CountDownButton = styled.button`
  ${flexCenter('flex', 'center', 'center')}
  width: 32px;
  height: 32px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.blueMain};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #e7f4fd;
  }
`;

const CountDownButtonZero = styled.button`
  ${flexCenter('flex', 'center', 'center')}
  width: 32px;
  height: 32px;
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 50%;
`;

const CountUpButton = styled.button`
  ${flexCenter('flex', 'center', 'center')}
  width: 32px;
  height: 32px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.blueMain};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #e7f4fd;
  }
`;

const CountNum = styled.p`
  margin: 0 6px;
  width: 24px;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: #343a40;
  text-align: center;
`;

const GrayLine = styled.div`
  margin: 2px 0px;
  width: 428px;
  border-top: 1px solid #dee2e6;
`;
