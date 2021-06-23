import React from 'react';
import styled from 'styled-components/macro';
import { inputStyle, inputText } from '../../style/mixin';
import { Link } from 'react-router-dom';

export default function LoginEmail() {
  return (
    <>
      <LoginEmailContainer>
        <Email>이메일 *</Email>
        <EmailInput></EmailInput>
        <Password>비밀번호 *</Password>
        <PasswordInput type="password"></PasswordInput>
        <SignupButton>이메일로 로그인</SignupButton>
        <SignupText>
          아직 회원이 아니신가요?
          <SignupLink to="/signup">회원가입</SignupLink>
        </SignupText>
      </LoginEmailContainer>
    </>
  );
}

const LoginEmailContainer = styled.div`
  padding: 48px;
  width: 430px;
  border: 1px solid #dee2e5;
`;

const SignupButton = styled.button`
  margin-bottom: 20px;
  width: 330px;
  height: 48px;
  background-color: ${({ theme }) => theme.blueMain};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 600;
`;

const Email = styled.p`
  ${inputText}
`;

const Password = styled.p`
  ${inputText}
`;

const EmailInput = styled.input.attrs({
  placeholder: 'ID@example.com',
})`
  ${inputStyle}
`;

const PasswordInput = styled.input.attrs({
  placeholder: '영문, 숫자, 특수문자 2가지 조합 6~15자',
})`
  ${inputStyle}
`;

const SignupText = styled.span`
  margin: 40px 0px 48px 0px;
  padding-top: 3px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.fontGray};
`;

const SignupLink = styled(Link)`
  margin-left: 5px;
  font-weight: 500;
  color: #666d75;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.fontBlack};
    font-weight: 600;
  }
`;
