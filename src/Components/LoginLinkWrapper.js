import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { flexCenter } from '../style/mixin';
import { Link } from 'react-router-dom';

export default function LoginLinkWrapper(link) {
  const [isImageHover, setIsImageHover] = useState(false);
  const { name, url, icon, iconGray } = link.link;
  return (
    <>
      <LoginLink
        to={url}
        onMouseOver={() => setIsImageHover(true)}
        onMouseOut={() => setIsImageHover(false)}
      >
        <LoginIcon
          src={isImageHover ? `/images/${icon}` : `/images/${iconGray}`}
        />
        <LoginText>{name}</LoginText>
      </LoginLink>
    </>
  );
}

const LoginLink = styled(Link)`
  ${flexCenter('flex', 'center', 'center')}
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.fontBlack};
  }
`;

const LoginText = styled.span`
  padding-top: 2px;
  font-size: 15px;
  font-weight: 600;
  color: #666d75;
  letter-spacing: 0.2px;
  &:hover {
    color: ${({ theme }) => theme.fontBlack};
  }
`;

const LoginIcon = styled.img`
  margin-right: 6px;
  width: 16px;
  height: 16px;
  border: none;
`;
