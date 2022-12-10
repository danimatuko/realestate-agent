import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import FeaturedAssets from '../components/FeaturedAssets';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedAssets />
      <About />
      <Banner />
      <Services />
    </>
  );
};

export default Home;
