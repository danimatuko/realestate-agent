import React, { useEffect, useState } from 'react';
import useInsert from '../../hooks/useInsert';
import supabase from '../../supabase/config';

type inputProps = {
  name: string;
  value: string;
};

const Post = () => {
  const [asset, setAsset] = useState<null | object>(null);
  const { data, error, insertData } = useInsert('assets');

  const inputChangeHandler = ({ name, value }: inputProps) => {
    setAsset({ ...asset, [name]: value });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(asset);
    asset && insertData(asset);
  };

  return (
    <div className='py-16 bg-base-200 min-h-screen h-full text-lg'>
      <div className='container mx-auto max-w-screen-lg'>
        {error && <div>{error.message}</div>}
        <h1 className='text-6xl text-center mb-16'>Add new asset</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='grid grid-cols-2 gap-x-16 gap-y-4'>
            <label className='col-span-2'>
              <span className='block font-medium text-slate-700 mb-2'>
                Address
              </span>
              <input
                name='address'
                type='text'
                className='input w-full mb-4'
                onChange={(e) => inputChangeHandler(e.target)}
              />
            </label>{' '}
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
                    Pick your favorite Simpson
                  </option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
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
              <label className='w-1/2 mb-4'>
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
              </label>{' '}
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
              </div>{' '}
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
                    name='offerdFor'
                    type='radio'
                    value='rent'
                    className='radio checked:bg-green-500'
                    onChange={(e) => inputChangeHandler(e.target)}
                  />
                  <label className='label cursor-pointer'>
                    <span className='mr-1'>Sale</span>
                    <input
                      name='offerdFor'
                      type='radio'
                      value='sale'
                      className='radio checked:bg-blue-500'
                      onChange={(e) => inputChangeHandler(e.target)}
                    />
                  </label>
                </label>
              </label>{' '}
            </div>
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
