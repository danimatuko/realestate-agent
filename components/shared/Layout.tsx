import React from 'react';
import { Children } from '../../interface/Children';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }: Children) => {
  return (
    <div className='relative min-h-screen h-full'>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
