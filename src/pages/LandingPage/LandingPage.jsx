import React from 'react';
import Hero from './Partial/hero';
import Cta from './Partial/cta';
import Foot from './Partial/footer'
import Nav from './Partial/navbar'
import { useGetPeople } from '../../Hooks/useGetPeople';


const Home = () => {
  const {snapshot, loading} = useGetPeople();
  
  console.log(loading ? 'loading...' : snapshot?.user);

  return (
    <>
    <Nav />
    <Hero loading={loading} snapshot={snapshot?.user} />
    <Cta />
    <Foot />
    </>

  );
};

export default Home;
