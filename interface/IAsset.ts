import { offeredFor } from '../types';

export interface IAsset {
  id: string;
  postedOn: Date;
  address: string;
  imgURL: string;
  type: string;
  price: number;
  size: number;
  bedrooms: number;
  parking: boolean;
  offeredFor: offeredFor;
}
