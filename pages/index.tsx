import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
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
      <Footer />
    </>
  );
};

export default Home;
