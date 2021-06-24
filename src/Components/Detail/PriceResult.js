import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { detailContext } from '../../utils/context';
import { flexCenter } from '../../style/mixin';

export default function PriceResult() {
  const { selectedItem, data } = useContext(detailContext);

  return (
    <div>
      <PriceResultWrapper>
        <ul>
          {data &&
            data.product?.options.map((option, index) => (
              <div key={index}>
                {selectedItem[index] !== 0 && (
                  <OptionSelected>
                    <TextWrapper>
                      <ItemText>{option.name}</ItemText>
                      <div>
                        <SubPrice>
                          {selectedItem[index]} x ₩
                          {Number(option.price).toLocaleString()}
                        </SubPrice>
                        <ItemPrice>
                          {(
                            selectedItem[index] * option.price
                          ).toLocaleString()}
                          원
                        </ItemPrice>
                      </div>
                    </TextWrapper>
                    <GrayLine></GrayLine>
                  </OptionSelected>
                )}
              </div>
            ))}
        </ul>
        <TotalPrice>
          <PriceText>총 여행금액</PriceText>
          <Price>
            {data.product?.options
              .reduce((acc, option, index) => {
                return acc + selectedItem[index] * option.price;
              }, 0)
              .toLocaleString()}
            원
          </Price>
        </TotalPrice>
      </PriceResultWrapper>
      <BuyButtonWrapper>
        <BuyButton>구매하기</BuyButton>
      </BuyButtonWrapper>
    </div>
  );
}

const PriceResultWrapper = styled.div`
  margin: 10px 0px 20px 0px;
  padding: 20px 16px;
  width: 700px;
  background-color: #f8f9fa;
`;

const OptionSelected = styled.li`
  ${flexCenter('flex', 'space-between', 'center')}
  flex-direction: column;
`;

const TextWrapper = styled.div`
  width: 668px;
  ${flexCenter('flex', 'space-between', 'center')}
  flex-direction: row;
`;

const GrayLine = styled.div`
  margin: 18px 0px;
  width: 668px;
  border-top: 1px solid #dee2e6;
`;

const ItemText = styled.div`
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #666d75;
  display: inline-block;
  max-width: 400px;
`;
const SubPrice = styled.span`
  display: inline-block;
  margin-right: 32px;
  font-size: 12px;
  color: #848c94;
`;

const ItemPrice = styled.span`
  display: inline-block;
  width: 70px;
  font-size: 14px;
  text-align: right;
  color: #343a40;
`;

const TotalPrice = styled.div`
  ${flexCenter('flex', 'flex-end', 'center')}
`;

const PriceText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #343a40;
`;

const Price = styled.span`
  margin-left: 16px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.blueMain};
`;

const BuyButtonWrapper = styled.div`
  width: 700px;
  ${flexCenter('flex', 'flex-end', 'center')}
`;

const BuyButton = styled.button`
  margin-bottom: 10px;
  width: 120px;
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
