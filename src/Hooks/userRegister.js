import { useState } from 'react';

const useRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const validateForm = () => {
    if (name === '' || email === '' || password === '' || password_confirm === '') {
        setError('Username dan password harus diisi');
        return false;
    } else if(password !== password_confirm) {
        setError('Invalid Password Confirmation');
        return false;     
    }
    return true;
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    setError('');
  };

  return { name, email, password, password_confirm, error, handleNameChange, handleEmailChange, handlePasswordChange, handlePasswordConfirmChange, validateForm, resetForm };
};

export default useRegister;
