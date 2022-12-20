import React, { useEffect, useState } from 'react';
import PlacesAutoComplete from '../../components/PlacesAutoComplete';
import useInsert from '../../hooks/useInsert';
import supabase from '../../supabase/config';

type inputProps = {
  name: string;
  value: string;
};

const assetTypeOptions = [
  'House',
  'Appartment',
  'Penthouse',
  'Duplex',
  'Studio',
  'Garden appartment',
];

const Post = () => {
  const [asset, setAsset] = useState<null | object>(null);
  const { data, error, insertData } = useInsert('assets');
  const [address, setAddress] = useState<null | string>(null);

  const inputChangeHandler = ({ name, value }: inputProps) => {
    setAsset({ ...asset, [name]: value });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setAsset({ ...asset, address: address });
    console.log(asset);
    asset && insertData(asset);
  };

  return (
    <div className='py-16 bg-base-200 min-h-screen h-full text-lg'>
      {error && <div>{error.message}</div>}
      <h1 className='text-6xl text-center mb-16'>Add new asset</h1>
      <div className='container mx-auto max-w-screen-lg'>
        <form onSubmit={onSubmitHandler}>
          <div className='grid grid-cols-2 gap-x-16 gap-y-4'>
            <div>
              <label className='w-1/2'>
                <span className='block font-medium text-slate-700 mb-2'>
                  Type
                </span>
                <select
                  name='type'
                  className='select w-full mb-4'
                  defaultValue='Pick your favorite Simpson'
                  onChange={(e) => inputChangeHandler(e.target)}>
                  <option
                    value='Pick your favorite Simpson'
                    disabled>
                    Pick your asset
                  </option>
                  {assetTypeOptions.map((assetType) => (
                    <option key={assetType}>{assetType}</option>
                  ))}
                </select>
              </label>
              <label className='w-1/2'>
                <span className='block font-medium text-slate-700 mb-2'>
                  Price
                </span>
                <input
                  name='price'
                  type='number'
                  className='input w-full mb-4'
                  onChange={(e) => inputChangeHandler(e.target)}
                />
              </label>
              <div className='w-1/2 mb-4'>
                <span className=' font-medium text-slate-700 mb-2'>
                  Parking
                </span>
                <label className='flex items-center gap-2'>
                  <span className='mr-1'>Yes</span>
                  <input
                    name='parking'
                    type='radio'
                    value='yes'
                    className='radio checked:bg-green-500'
                    onChange={(e) => inputChangeHandler(e.target)}
                  />
                  <label className='label cursor-pointer'>
                    <span className='mr-1'>No</span>
                    <input
                      name='parking'
                      type='radio'
                      value='no'
                      className='radio checked:bg-blue-500'
                      onChange={(e) => inputChangeHandler(e.target)}
                    />
                  </label>
                </label>
              </div>
            </div>
            <div>
              <div className='flex gap-6'>
                <label className='w-1/2'>
                  <span className='block font-medium text-slate-700 mb-2'>
                    Size
                  </span>
                  <input
                    name='size'
                    type='number'
                    className='input w-full mb-4'
                    onChange={(e) => inputChangeHandler(e.target)}
                  />
                </label>{' '}
                <label className='w-1/2'>
                  <span className='block font-medium text-slate-700 mb-2'>
                    Bedrooms
                  </span>
                  <input
                    name='bedrooms'
                    type='number'
                    className='input w-full mb-4'
                    onChange={(e) => inputChangeHandler(e.target)}
                  />
                </label>
              </div>
              <label className='w-1/2'>
                <span className='block font-medium text-slate-700 mb-2'>
                  Images
                </span>
                <input
                  name='imageURL'
                  type='file'
                  className='input w-full mb-4'
                  onChange={(e) => inputChangeHandler(e.target)}
                />
              </label>
              <label className='w-1/2'>
                <span className='block font-medium text-slate-700 mb-2'>
                  Offerd For
                </span>
                <label className='flex items-center gap-2'>
                  <span className='mr-1'>Rent</span>
                  <input
                    name='offeredFor'
                    type='radio'
                    value='rent'
                    className='radio checked:bg-green-500'
                    onChange={(e) => inputChangeHandler(e.target)}
                  />
                  <label className='label cursor-pointer'>
                    <span className='mr-1'>Sale</span>
                    <input
                      name='offeredFor'
                      type='radio'
                      value='sale'
                      className='radio checked:bg-blue-500'
                      onChange={(e) => inputChangeHandler(e.target)}
                    />
                  </label>
                </label>
              </label>
            </div>{' '}
            <textarea
              name='description'
              rows={4}
              className='textarea col-span-2'
              onChange={(e) => inputChangeHandler(e.target)}></textarea>
          </div>{' '}
          <div className='py-4'>
            <span className='mr-1'>Address</span>
            <PlacesAutoComplete setAddress={setAddress} />
          </div>
          <button
            type='submit'
            className='btn btn-wide btn-lg mt-8'>
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
