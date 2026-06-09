/** Spot domain model (shared by UI and mock). */
export type Spot = {
  id: number;
  name: string;
  category: string;
  location: string;
  address: string;
  pins: number;
  trending: boolean;
  pinned: boolean;
  image: string;
  lat: number;
  lng: number;
  description: string;
};
