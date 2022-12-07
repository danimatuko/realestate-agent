import React from 'react';
import { Children } from '../../types';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }: Children) => {
  return (
    <div className='relative min-h-screen h-full pb-96'>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
