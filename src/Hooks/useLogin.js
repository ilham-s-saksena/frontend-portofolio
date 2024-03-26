import { useState, useEffect } from 'react';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Cek apakah ada token yang tersimpan di localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/user/dashboard';
    }
  }, []);


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    if (email === '' || password === '') {
      setError('email dan password harus diisi');
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  return { email, password, error, handleEmailChange, handlePasswordChange, validateForm, resetForm };
};

export default useLogin;
