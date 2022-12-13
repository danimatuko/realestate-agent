import Link from 'next/link';
import React from 'react';
import { IAsset } from '../interface/IAsset';
import { MdLocationPin } from 'react-icons/md';

type cardProps = {
  key: string;
  asset: IAsset;
};

const Card = ({ asset }: cardProps) => {
  return (
    <Link href={`assets/${asset.id}`}>
      <div className='card card-compact w-96 bg-base-100 shadow-xl'>
        <picture>
          <img
            src={asset.imgURL}
            alt='Shoes'
            className='rounded-t-lg'
          />
        </picture>
        <div className='card-body items-center '>
          <h2 className='card-title'>
            <MdLocationPin />
            {asset.address}
          </h2>
          <p className='flex items-center text-lg text-primary font-bold'>
            ${asset.price}
          </p>
        </div>
      </div>{' '}
    </Link>
  );
};

export default Card;
