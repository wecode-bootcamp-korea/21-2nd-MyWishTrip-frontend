import React from 'react';
import styled from 'styled-components/macro';
import { flexCenter } from '../../style/mixin';
import { Link } from 'react-router-dom';
import LoginLinkWrapper from '../../Components/LoginLinkWrapper';

export default function Signup() {
  return (
    <SignupWrapper>
      <SignupContainer>
        <HelloImage src="/images/waving-hand.png" />
        <Title>반갑습니다!</Title>
        <Paragraph>여행의 모든 것, 마이위시트립</Paragraph>
        <Button>
          <KakaoIcon src="/images/kakao.svg" />
          카카오로 계속하기
        </Button>
        <LoginLinkContainer>
          {LINK_DATA &&
            LINK_DATA.map((link, index) => {
              return (
                <>
                  <LoginLinkWrapper link={link} key={index}></LoginLinkWrapper>
                  {index !== LINK_DATA.length - 1 && <Bar>|</Bar>}
                </>
              );
            })}
        </LoginLinkContainer>
        <SignupText>
          이미 아이디가 있으신가요?
          <SignupLink to="/signin">로그인</SignupLink>
        </SignupText>
      </SignupContainer>
    </SignupWrapper>
  );
}

const SignupWrapper = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  margin: 50px 0px;
`;

const SignupContainer = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  flex-direction: column;
  width: 430px;
  padding: 0px 48px;
  border: 1px solid #eaecef;
  border-radius: 1px;
`;

const HelloImage = styled.img`
  margin-top: 48px;
  width: 50px;
  height: 50px;
  border: none;
`;

const Title = styled.p`
  margin-top: 36px;
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontBlack};
`;

const Paragraph = styled.p`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.fontDarkGray};
`;

const Button = styled.button`
  ${flexCenter('flex', 'center', 'center')}
  margin-top: 26px;
  width: 330px;
  height: 48px;
  border: 1px solid #f7e317;
  border-radius: 4px;
  background-color: #f7e317;
  font-size: 16px;
  font-weight: 600;
  color: #381e1f;
  letter-spacing: 0.2px;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  }
`;

const KakaoIcon = styled.img`
  margin-right: 10px;
  width: 13px;
  border: none;
`;

const LoginLinkContainer = styled.div`
  margin-top: 26px;
  font-size: 15px;
  font-weight: 600;
  color: #666d75;
  letter-spacing: 0.2px;
  cursor: pointer;
  ${flexCenter('flex', 'center', 'center')}
`;

const Bar = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #d8d8d8;
  padding-top: 3px;
  margin: 0px 16px 0px 18px;
`;

const SignupText = styled.span`
  margin: 40px 0px 48px 0px;
  padding-top: 3px;
  font-size: 14px;
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

const LINK_DATA = [
  {
    name: '페이스북',
    url: '/',
    icon: 'facebook.svg',
    iconGray: 'facebook_gray.svg',
  },
  {
    name: '네이버',
    url: '/',
    icon: 'naver.svg',
    iconGray: 'naver_gray.svg',
  },
  {
    name: '이메일',
    url: '/signup_email',
    icon: 'mail.svg',
    iconGray: 'mail_gray.svg',
  },
];
