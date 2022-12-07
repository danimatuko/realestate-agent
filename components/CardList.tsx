import React from 'react';
import Card from './Card';

const CardList = () => {
  return (
    <section className='container mx-auto py-32'>
      <h2 className='text-4xl text-center mb-16'>Featured Properties</h2>
      <div className='flex justify-around gap-8'>
        {[...Array(3).keys()].map(() => (
          <Card />
        ))}
      </div>
    </section>
  );
};

export default CardList;
