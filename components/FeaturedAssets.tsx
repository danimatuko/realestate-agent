import React from 'react';
import useSelect from '../hooks/useSelect';
import CardList from './CardList';

const FeaturedAssets = () => {
  const { data: assets } = useSelect('assets');

  return (
    <section className='container mx-auto py-32'>
      <h2 className='text-4xl text-center mb-4'>Featured Assets</h2>
      <div className='flex justify-around gap-8'>
        <CardList assets={assets} />
      </div>
    </section>
  );
};

export default FeaturedAssets;
