import React from 'react';

const Hero = () => {
  return (
    <section className='w-full'>
      <nav className='bg-white shadow-lg'>
        <div className='md:flex items-center justify-between py-2 px-8 md:px-12'>
          <div className='flex justify-between items-center'>
            <div className='text-2xl font-bold text-gray-800 md:text-3xl'>
              <a href='#'>RealEstate</a>
            </div>
            <div className='md:hidden'>
              <button
                type='button'
                className='block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none'>
                <svg
                  className='h-6 w-6 fill-current'
                  viewBox='0 0 24 24'>
                  <path
                    className='hidden'
                    d='M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z'
                  />
                  <path d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z' />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex flex-col md:flex-row hidden md:block -mx-2'>
            <a
              href='#'
              className='text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2'>
              Home
            </a>
            <a
              href='#'
              className='text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2'>
              About
            </a>
            <a
              href='#'
              className='text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2'>
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div
        className='flex bg-white'
        style={{ height: '600px' }}>
        <div className='flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2'>
          <div>
            <h1 className='text-3xl font-semibold text-gray-800 md:text-5xl mb-4'>
              Your Future Home Is Right
              <span className='text-primary px-1'>Here</span>
            </h1>
            <p className='mt-2 text-sm text-gray-500 md:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
              Cumque debitis dignissimos id quam vel!
            </p>
            <div className='flex justify-center lg:justify-start mt-6'>
              <div className='form-control'>
                <div className='input-group'>
                  <input
                    type='text'
                    placeholder='Leave your number...'
                    className='input input-bordered w-72 focus:outline-none'
                  />
                  <button className='btn '>Call Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='hidden lg:block lg:w-1/2'
          style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}>
          <div
            className='h-full object-cover'
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/6798002/pexels-photo-6798002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            }}>
            <div className='h-full bg-black opacity-25'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
//                 'url(https://images.pexels.com/photos/7821514/pexels-photo-7821514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
