import React from 'react';
import Card from './Card';

const CardList = ({ amount = 3 }) => {
  return (
    <section className='container mx-auto'>
      <div class='grid grid-cols-3 gap-4 py-16'>
        {[...Array(amount).keys()].map(() => (
          <Card key={Math.random()} />
        ))}
      </div>
    </section>
  );
};

export default CardList;
