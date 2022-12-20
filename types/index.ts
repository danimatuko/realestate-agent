import { Dispatch, SetStateAction } from 'react';

export type offeredFor = 'sale' | 'rent';

export type Libraries = (
  | 'places'
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'visualization'
)[];

export type PlacesProps = {
  setAddress?: React.Dispatch<React.SetStateAction<string | null>>;
  setSelected?: Dispatch<
    SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
};
