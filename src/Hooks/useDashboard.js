import React from 'react'
import { useEffect } from 'react';
import { getAccount } from '../Services/selfAccount';

export const useGetAccount = () => {
  const [snapshot, setSnapshot] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  // Cek apakah ada token yang tersimpan di localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/auth/login';
    }
  }, []);

  const fetchAccount = async () => {
    try {
        setSnapshot(await getAccount())
    } catch (error) {
        throw new Error(error);
    } finally {
        setLoading (false);
    }
  }
  
  React.useEffect(()=>{
    fetchAccount()
  }, [])

    return {
        snapshot,
        loading
    }
}
