import React from 'react';
import { IAsset } from '../interface/IAsset';
import Card from './Card';

type Assets = {
  assets: IAsset[] | null;
};

const CardList = ({ assets }: Assets) => {
  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-4 py-16'>
        {assets?.map((asset) => (
          <Card
            key={asset.id}
            asset={asset}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList;
