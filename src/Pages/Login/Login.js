import React from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';
import { flexCenter } from '../../style/mixin';
import { Link, useHistory } from 'react-router-dom';
import LoginLinkWrapper from '../../Components/LoginLinkWrapper';

const { Kakao } = window;

export default function Login() {
  const history = useHistory();
  const kakaoLoginHandler = () => {
    Kakao.Auth.login({
      success: function (response) {
        axios
          .get('http://10.58.2.238:8000/users/social-login', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: response.access_token,
            },
          })
          .then(res => {
            localStorage.setItem('token', res.data.token);
            if (res.data.token) {
              alert('마이위시트립에 오신걸 환영합니다!');
              history.push('/');
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };
  return (
    <>
      <LoginContainer>
        <HelloImage src="/images/waving-hand.png" />
        <Title>Welcome!</Title>
        <Paragraph>여행의 모든 것, 마이위시트립</Paragraph>
        <KakaoButton onClick={kakaoLoginHandler}>
          <KakaoIcon src="/images/kakao.svg" />
          카카오로 계속하기
        </KakaoButton>
        <LoginLinkContainer>
          {LINK_DATA &&
            LINK_DATA.map((link, index) => (
              <>
                <LoginLinkWrapper link={link}></LoginLinkWrapper>
                {index !== LINK_DATA.length - 1 && <Bar>|</Bar>}
              </>
            ))}
        </LoginLinkContainer>
        <SignupText>
          아직 회원이 아니신가요?
          <SignupLink to="/signup">회원가입</SignupLink>
        </SignupText>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
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
  font-weight: 800;
  color: ${({ theme }) => theme.fontBlack};
`;

const Paragraph = styled.p`
  margin-top: 15px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.fontDarkGray};
`;

const KakaoButton = styled.button`
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
