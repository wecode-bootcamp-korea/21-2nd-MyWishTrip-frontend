import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { validateEmail } from './emailValidator';
import usePasswordValidator from './usePasswordValidator';
import styled from 'styled-components/macro';
import { flexCenter, inputStyle, inputText } from '../../style/mixin';

export default function SignupEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [password, setPassword, passwordError] = usePasswordValidator({
    min: 6,
    max: 15,
  });

  useEffect(() => {
    if (!email) {
      setEmailError('');
    } else {
      if (validateEmail(email)) {
        setEmailError('');
      } else {
        setEmailError('이메일 주소가 맞나요?');
      }
    }
  }, [email]);

  useEffect(() => {
    if (!confirmPassword || !password) {
      setConfirmPasswordError('');
    } else {
      if (password !== confirmPassword) {
        setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
      } else {
        setConfirmPasswordError('');
      }
    }
  }, [password, confirmPassword]);

  const history = useHistory();

  const goLogin = () => {
    history.push('/signin');
  };

  const fetchToData = () => {
    allValid &&
      fetch('http://10.58.6.32:8000/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          res.message === 'SUCCESS'
            ? goLogin()
            : alert('회원가입에 실패했습니다');
        });
  };

  const allValid =
    validateEmail(email) &&
    password === confirmPassword &&
    password !== '' &&
    confirmPassword !== '';

  return (
    <SignupWrapper>
      <SignupEmailContainer>
        <Label>이름 *</Label>
        <NameInput onChange={e => setName(e.target.value)} />
        <Label>이메일 *</Label>
        <EmailInput onChange={e => setEmail(e.target.value)} />
        <Error>{emailError}</Error>
        <Label>비밀번호 *</Label>
        <PasswordInput onChange={e => setPassword(e.target.value)} />
        <Error>{passwordError}</Error>
        <Label>비밀번호 확인 *</Label>
        <PasswordCheckInput
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <Error>{confirmPasswordError}</Error>
        {allValid ? (
          <SignupButton onClick={fetchToData}>회원가입</SignupButton>
        ) : (
          <SignupButtonInvalid>회원가입</SignupButtonInvalid>
        )}
      </SignupEmailContainer>
    </SignupWrapper>
  );
}

const SignupWrapper = styled.div`
  ${flexCenter('flex', 'center', 'center')}
  margin: 50px 0px;
`;

const SignupEmailContainer = styled.div`
  padding: 48px;
  width: 430px;
  border: 1px solid #dee2e5;
`;

const SignupButton = styled.button`
  margin-top: 20px;
  width: 330px;
  height: 48px;
  background-color: ${({ theme }) => theme.blueMain};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const SignupButtonInvalid = styled.button`
  margin-top: 20px;
  width: 330px;
  height: 48px;
  background-color: ${({ theme }) => theme.blueDim};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 600;
`;

const Error = styled.p`
  margin: 4px 0px;
  font-size: 12px;
  color: #ff8001;
  font-weight: 500;
`;

const Label = styled.div`
  ${inputText}
`;

const NameInput = styled.input.attrs({
  type: 'text',
  placeholder: '이름을 입력해주세요.',
})`
  ${inputStyle}
`;

const EmailInput = styled.input.attrs({
  type: 'text',
  placeholder: 'ID@example.com',
})`
  ${inputStyle}
`;

const PasswordInput = styled.input.attrs({
  type: 'password',
  placeholder: '영문, 숫자, 특수문자 2가지 조합 6~15자',
})`
  ${inputStyle}
`;

const PasswordCheckInput = styled.input.attrs({
  type: 'password',
  placeholder: '비밀번호를 한번 더 입력해주세요.',
})`
  ${inputStyle}
`;
