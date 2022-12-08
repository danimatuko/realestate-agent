import React from 'react';
import Details from '../components/Asset/Details';
import Map from '../components/Asset/Map';
import Carousel from '../components/Carousel';

interface IAssetDetails {
  id: string;
  Location: string;
  Type: string;
  Price: number;
  Size: number;
  Bedrooms: number;
  Bathrooms: number;
  parking: boolean;
}

const Assets = () => {
  return (
    <div className='container mx-auto mt-16'>
      <div className='grid grid-cols-4 gap-16'>
        <div className='col-span-3'>
          <div className='flex justify-between mb-8'>
            <h1 className='text-4xl'>20 Rumble Street</h1>
            <div className='text-gray-600 font-semibold text-3xl'>
              $1,430,000
            </div>
          </div>
          <Carousel />
          <p className='py-16'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            quasi molestias temporibus ex vitae quod aliquid illo, amet aperiam
            laudantium cumque dolorum fuga inventore, sapiente error maxime ea
            quia dolores? Minus perferendis vitae vel molestias ea nisi id
            mollitia blanditiis. Sit consequuntur blanditiis fugiat excepturi?
            Repellat ex minus deserunt explicabo quisquam quod quasi? Nulla,
            quibusdam sunt dolor aspernatur at laboriosam. Id dolor facere quo,
            deserunt sed autem quidem facilis nihil obcaecati amet et similique
            aliquid cum, molestias omnis fuga voluptas libero voluptatibus
            excepturi inventore consectetur ad non fugit nesciunt. Mollitia. Sit
            ratione voluptas, quam nihil fugiat eum quia ea odio corporis,
            libero non. Minus excepturi nemo obcaecati quasi saepe! Consectetur
            architecto natus debitis, odit at laboriosam nostrum ex aperiam.
            Delectus! Ea saepe nihil consequatur numquam quasi beatae rem a,
            nesciunt reprehenderit atque similique voluptatem mollitia odio
            quisquam hic iste neque. Soluta beatae velit et. Ex libero quas cum
            exercitationem ipsum.
          </p>
        </div>
        <div>
          <Details />
        </div>
        <div className='container mx-auto w-[60vw] h-[35rem]'>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Assets;
