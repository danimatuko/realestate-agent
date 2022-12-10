import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section
      id='about'
      className='container flex justify-center gap-32 mx-auto py-32'>
      <div className='w-1/2 py-32'>
        <h2 className='text-4xl mb-8'>About Me</h2>
        <p className='text-gray-500 text-lg mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          necessitatibus exercitationem perspiciatis consequuntur omnis
          quibusdam dignissimos porro illum fugiat ad cumque recusandae aliquam
          asperiores, veritatis ea nemo minus natus ratione!
        </p>
        <p className='text-gray-500 text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          necessitatibus exercitationemcumque recusandae aliquam asperiores,
          veritatis ea nemo minus natus ratione! perspici atis consequuntur
          omnis quibusdam dignissimos porro illum fugiat ad ndae aliquam
          asperiores, veritatis ea nemo minus natus ratione! perspiciatis
          consequuntur omnis quibusdam dignissimos porro illum fugiat ad
        </p>
      </div>
      <div>
        <Image
          className='rounded'
          width={450}
          height={400}
          alt='broker'
          src='https://images.pexels.com/photos/7821743/pexels-photo-7821743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        />
      </div>
    </section>
  );
};

export default About;
