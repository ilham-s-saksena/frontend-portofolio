import { useState } from 'react';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    if (username === '' || password === '') {
      setError('Username dan password harus diisi');
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setError('');
  };

  return { username, password, error, handleUsernameChange, handlePasswordChange, validateForm, resetForm };
};

export default useLogin;
