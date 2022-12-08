import React from 'react';

const Details = () => {
  return (
    <>
      <ul className='flex flex-col text-lg border-l pl-8'>
        <h2 className='text-xl font-semibold mb-2'>About Property</h2>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Location</span>
          <span>Jerusalem </span>
        </li>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Type</span>
          <span>Penthouse </span>
        </li>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Price</span>
          <span>$5,500,000</span>
        </li>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Size</span>
          <span>153 m2 </span>
        </li>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Bedrooms</span>
          <span>4 </span>
        </li>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Parking</span>
          <span>Yes </span>
        </li>
      </ul>
    </>
  );
};

export default Details;
