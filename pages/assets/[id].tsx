import { useRouter } from 'next/router';
import React from 'react';
import AssetDetails from '../../components/Asset/AssetDetails';
import Map from '../../components/Asset/Map';
import Carousel from '../../components/Carousel';
import { IAssetDetails } from '../../interface/IAssetDetails';

// sample value to test Asset implementation of IAssetDetails
const assetProps: IAssetDetails = {
  id: 'string',
  postedOn: new Date(),
  address: 'string',
  type: 'string',
  price: 5,
  size: 5,
  bedrooms: 5,
  parking: true,
  offeredFor: 'sale',
};

const Asset = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <div className='container mx-auto mt-16'>
      <div className='grid grid-cols-4 gap-16'>
        <div className='col-span-3'>
          <div className='flex justify-between mb-8'>
            <h1 className='text-4xl'>20 Rumble Street</h1>
            <div className='flex items-center gap-2'>
              <span className='text-gray-600 font-semibold text-3xl'>
                $1,430,000
              </span>
              <span className='badge badge-lg bg-indigo-900 py-4'>
                For Sale
              </span>
            </div>
          </div>
          <Carousel />
          <h2 className='text-3xl pt-16 pb-4'>Asset Brief</h2>
          <p className='text-lg'>
            Residences can be classified by and how they are connected to
            neighbouring residences and land. Different types of housing tenure
            can be used for the same physical type. connected residences might
            be owned by a single entity and leased out, or owned separately with
            an agreement covering the relationship between units and common.
            they are connected to neighbouring residences and land. Different
            types of housing tenure can be used for the same physical type.
          </p>
        </div>
        <div>
          <AssetDetails {...assetProps} />
        </div>
        <div className='container mx-auto w-[60vw] h-[35rem]'>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Asset;
