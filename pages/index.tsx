import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <CardList />
      <About />
      <Banner />
      <Services />
    </>
  );
};

export default Home;
