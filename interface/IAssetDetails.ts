export interface IAssetDetails {
  id: string;
  postedOn: Date;
  address: string;
  type: string;
  price: number;
  size: number;
  bedrooms: number;
  parking: boolean;
  offeredFor: 'sale' | 'rent';
}
