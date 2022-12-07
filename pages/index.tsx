import React from 'react';
import About from '../components/About';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <CardList />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
