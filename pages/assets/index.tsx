import React from 'react';
import Card from '../../components/Card';
import CardList from '../../components/CardList';

const Assets = () => {
  return (
    <div className='container mx-auto py-16'>
      <h1 className='text-6xl text-center'>All Assets</h1>
      <CardList amount={12} />
    </div>
  );
};

export default Assets;
