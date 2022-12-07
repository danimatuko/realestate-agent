import React from 'react';
import CardList from '../components/CardList';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Hero />

      <CardList />
      <Services />
    </>
  );
};

export default Home;
