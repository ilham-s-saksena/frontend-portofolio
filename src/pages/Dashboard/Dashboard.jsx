import React from 'react';
import { useGetAccount } from '../../Hooks/useDashboard';
import Profile from './Partial/Profile';

const Dashboard = () => {
  const {snapshot, loading} = useGetAccount();
  
  return (
    <>

    <Profile loading={loading} snapshot={snapshot}></Profile>
    

    </>

  );
};

export default Dashboard;
