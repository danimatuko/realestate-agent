import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = () => {
  return (
    <div className='card bg-base-100 shadow-xl image-full'>
      <figure>
        <Image
          src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='Shoes'
          width={500}
          height={500}
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <Link
            href={'/assets/1'}
            className='btn btn-primary'>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
