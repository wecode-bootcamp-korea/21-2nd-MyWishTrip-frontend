import React from 'react';
import styled from 'styled-components/macro';
import { flexCenter } from '../style/mixin';

export default function MoreButton(props) {
  return (
    <MoreButtonContainer>
      {props.children}
      <ArrowDown src="/images/arrow-down.svg" alt="icon" />
    </MoreButtonContainer>
  );
}

const MoreButtonContainer = styled.button`
  ${flexCenter('flex', 'center', 'center')}
  margin-top: 16px;
  padding: 0px 32px;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  color: #495056;
  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  z-index: 10;

  &:hover {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const ArrowDown = styled.img`
  width: 24px;
  margin-left: 4px;
`;
