import React from 'react';

const Hero = () => {
  return (
    <section className='w-full'>
      <div className='flex bg-white h-[35rem]'>
        <div className='flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2'>
          <div>
            <h1 className='text-3xl font-semibold text-gray-800 md:text-5xl mb-4'>
              Your Future Home Is Right
              <span className='text-primary px-1'>Here</span>
            </h1>
            <p className='mt-2 text-sm text-gray-500 md:text-2xl'>
              Whether buying or selling in Vancouver, I am dedicated in treating
              your transaction with the upmost of care and trust. Call or e-mail
              me with any questions you have about buying or selling real
              estate.
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
