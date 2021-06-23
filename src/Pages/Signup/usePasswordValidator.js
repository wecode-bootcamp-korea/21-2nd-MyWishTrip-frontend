import { useState, useEffect } from 'react';

export default function usePasswordValidator(config = { min: 6, max: 15 }) {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    setPasswordError('');
    if (!password) return;

    if (password.length < config.min) {
      setPasswordError('비밀번호가 너무 짧습니다. (6자 이상)');
    } else if (password.length > config.max) {
      setPasswordError('비밀번호가 너무 깁니다. (15자 미만)');
    }
  }, [password]);
  return [password, setPassword, passwordError];
}
