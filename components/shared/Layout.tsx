import React, { useEffect } from 'react';
import { Children } from '../../interface/Children';
import supabase from '../../supabase/config';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }: Children) => {
  const isAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    console.log(session);
  };
  useEffect(() => {
    isAuth();
  }, []);

  return (
    <div className='relative min-h-screen h-full'>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
