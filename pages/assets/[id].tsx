import { useRouter } from 'next/router';
import React from 'react';
import AssetDetails from '../../components/Asset/AssetDetails';
import Carousel from '../../components/Carousel';
import Places from '../../components/PlacesAutoComplete';

import useSelect from '../../hooks/useSelect';
import { IAsset } from '../../interface/IAsset';

const Asset = () => {
  const router = useRouter();

  const { id } = router.query;

  const { data: asset, error } = useSelect('assets', id?.toString());

  return (
    <div className='container mx-auto mt-16'>
      <div className='grid grid-cols-4 gap-16'>
        <div className='col-span-3'>
          <div className='flex justify-between mb-8'>
            <h1 className='text-4xl'>{asset?.[0].address}</h1>
            <div className='flex items-center gap-2'>
              <span className='text-gray-600 font-semibold text-3xl'>
                $1,430,000
              </span>
              <span className='badge badge-lg bg-indigo-900 py-4'>
                For Sale
              </span>
            </div>
          </div>
          <Carousel src={asset?.[0].imgURL!} />
          <h2 className='text-3xl pt-16 pb-4'>Asset Brief</h2>
          <p className='text-lg'>{asset?.[0].description}</p>
        </div>
        <div>
          <AssetDetails asset={asset?.[0]!} />
        </div>
        <div className='container mx-auto w-[60vw] h-[35rem] mb-64'>
          Map Here
        </div>
      </div>
    </div>
  );
};

export default Asset;
