import { offeredFor } from '../types';

export interface IAsset {
  id: string;
  created_at: Date;
  address: string;
  imgURL: string;
  type: string;
  price: number;
  size: number;
  bedrooms: number;
  parking: boolean;
  offeredFor: offeredFor;
  description: string;
}
