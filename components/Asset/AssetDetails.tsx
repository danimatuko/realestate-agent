import React from 'react';
import { IAsset } from '../../interface/IAsset';

type AssetDetailsProps = {
  asset: IAsset;
};

const AssetDetails = ({ asset }: AssetDetailsProps) => {
  return (
    <>
      <ul className='flex flex-col text-lg border-l pl-8'>
        <h2 className='text-xl font-semibold mb-2'>About Asset</h2>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Address</span>
          <span>{asset?.address} </span>
        </li>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Type</span>
          <span>{asset?.type} </span>
        </li>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Price</span>
          <span>{asset?.price}</span>
        </li>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Size</span>
          <span>{asset?.size}</span>
        </li>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Bedrooms</span>
          <span>{asset?.bedrooms}</span>
        </li>
        <li className='flex items-center'>
          <span className='w-24 mr-8'>Parking</span>
          <span>{asset?.parking ? 'Yes' : 'No'}</span>
        </li>
      </ul>
    </>
  );
};

export default AssetDetails;
