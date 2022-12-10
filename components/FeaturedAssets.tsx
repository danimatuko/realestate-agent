import React from 'react';
import Card from './Card';
import CardList from './CardList';

const FeaturedAssets = () => {
  return (
    <section className='container mx-auto py-32'>
      <h2 className='text-4xl text-center mb-4'>Featured Properties</h2>
      <div className='flex justify-around gap-8'>
        <CardList />
      </div>
    </section>
  );
};

export default FeaturedAssets;
