import React, { useState } from 'react';
import { IAsset } from '../../interface/IAsset';

const Post = () => {
  const [asset, setAsset] = useState<IAsset | null>(null);

  return (
    <div className='py-16 bg-base-200 min-h-screen h-full text-lg'>
      <div className='container mx-auto max-w-screen-lg'>
        <h1 className='text-6xl text-center mb-16'>Add new asset</h1>
        <form>
          <div className='grid grid-cols-2 gap-x-16 gap-y-4'>
            <label className='col-span-2'>
              <span className='block font-medium text-slate-700 mb-2'>
                Address
              </span>
              <input
                type='text'
                className='input w-full mb-4'
              />
            </label>{' '}
            <div>
              <label className='w-1/2'>
                <span className='block font-medium text-slate-700 mb-2'>
                  Type
                </span>
                <select className='select w-full mb-4'>
                  <option
                    disabled
                    selected>
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
                  type='number'
                  className='input w-full mb-4'
                />
              </label>
              <label className='w-1/2 mb-4'>
                <span className=' font-medium text-slate-700 mb-2'>
                  Parking
                </span>
                <label className='flex items-center gap-2'>
                  <span className='mr-1'>Yes</span>
                  <input
                    type='radio'
                    name='radio-10'
                    className='radio checked:bg-green-500'
                    checked
                  />
                  <label className='label cursor-pointer'>
                    <span className='mr-1'>No</span>
                    <input
                      type='radio'
                      name='radio-10'
                      className='radio checked:bg-blue-500'
                      checked
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
                    type='number'
                    className='input w-full mb-4'
                  />
                </label>{' '}
                <label className='w-1/2'>
                  <span className='block font-medium text-slate-700 mb-2'>
                    Bedrooms
                  </span>
                  <input
                    type='number'
                    className='input w-full mb-4'
                  />
                </label>
              </div>{' '}
              <label className='w-1/2'>
                <span className='block font-medium text-slate-700 mb-2'>
                  Images
                </span>
                <input
                  type='file'
                  className='input w-full mb-4'
                />
              </label>
              <label className='w-1/2'>
                <span className='block font-medium text-slate-700 mb-2'>
                  Offerd For
                </span>
                <label className='flex items-center gap-2'>
                  <span className='mr-1'>Rent</span>
                  <input
                    type='radio'
                    name='radio-10'
                    className='radio checked:bg-green-500'
                    checked
                  />
                  <label className='label cursor-pointer'>
                    <span className='mr-1'>Sale</span>
                    <input
                      type='radio'
                      name='radio-10'
                      className='radio checked:bg-blue-500'
                      checked
                    />
                  </label>
                </label>
              </label>{' '}
            </div>
          </div>{' '}
          <button className='btn btn-wide btn-lg mt-8'>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
