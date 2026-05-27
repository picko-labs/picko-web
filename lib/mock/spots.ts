/**
 * Mock spots from K-SPOT Map.html MOCK_SPOTS
 */

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

export const TRENDING_CATEGORIES = [
  { id: 'hot', label: 'Hot Place', icon: '🔥' },
  { id: 'rising', label: 'Rising', icon: '🌟' },
  { id: 'kpop', label: 'K-POP', icon: '🎤' },
  { id: 'cafe', label: 'Cafe', icon: '☕' },
  { id: 'food', label: 'Food', icon: '🍜' },
  { id: 'photo', label: 'Photo', icon: '📸' },
  { id: 'shopping', label: 'Shopping', icon: '🛍️' },
  { id: 'culture', label: 'Culture', icon: '🏛️' },
  { id: 'nightlife', label: 'Nightlife', icon: '🌙' },
  { id: 'nature', label: 'Nature', icon: '🌳' },
] as const;

export const MOCK_SPOTS: Spot[] = [
  {
    id: 1,
    name: 'Seongsu-dong',
    category: 'Cafe',
    location: 'Seongdong-gu',
    address: 'Seongsu-dong, Seongdong-gu, Seoul',
    pins: 3241,
    trending: true,
    pinned: false,
    image: 'linear-gradient(135deg, #F56E6E 0%, #F04040 60%, #8C1818 100%)',
    lat: 37.5447,
    lng: 127.0557,
    description: 'Trendy neighborhood with cafes, galleries, and street art',
  },
  {
    id: 2,
    name: 'Gyeongbokgung',
    category: 'Culture',
    location: 'Jongno-gu',
    address: '161 Sajik-ro, Jongno-gu, Seoul',
    pins: 5120,
    trending: true,
    pinned: true,
    image: 'linear-gradient(135deg, #7AB0EE 0%, #4A8FE0 60%, #1A3580 100%)',
    lat: 37.5796,
    lng: 126.977,
    description: 'Main royal palace of the Joseon dynasty',
  },
  {
    id: 3,
    name: 'Hongdae',
    category: 'Nightlife',
    location: 'Mapo-gu',
    address: 'Hongik University area, Mapo-gu, Seoul',
    pins: 2890,
    trending: true,
    pinned: false,
    image: 'linear-gradient(135deg, #F8CE60 0%, #F5B820 60%, #965800 100%)',
    lat: 37.5568,
    lng: 126.9236,
    description: 'Youth culture hub with clubs, busking, and indie shops',
  },
  {
    id: 4,
    name: 'Common Ground',
    category: 'Shopping',
    location: 'Gwangjin-gu',
    address: '200 Achasan-ro, Gwangjin-gu, Seoul',
    pins: 1567,
    trending: true,
    pinned: false,
    image: 'linear-gradient(135deg, #E8E6E1 0%, #6b7684 60%, #111318 100%)',
    lat: 37.544,
    lng: 127.07,
    description: "Korea's first pop-up store made of containers",
  },
  {
    id: 5,
    name: 'Mangwon Market',
    category: 'Food',
    location: 'Mangwon-dong',
    address: '14 Poeun-ro 8-gil, Mapo-gu, Seoul',
    pins: 734,
    trending: false,
    pinned: false,
    image: 'linear-gradient(135deg, #F56E6E 0%, #F04040 60%, #8C1818 100%)',
    lat: 37.556,
    lng: 126.906,
    description: 'Local market with authentic Korean street food',
  },
  {
    id: 6,
    name: 'Starfield Library',
    category: 'Culture',
    location: 'Gangnam',
    address: '513 Yeongdong-daero, Gangnam-gu, Seoul',
    pins: 2891,
    trending: true,
    pinned: true,
    image: 'linear-gradient(135deg, #7AB0EE 0%, #4A8FE0 60%, #1A3580 100%)',
    lat: 37.512,
    lng: 127.059,
    description: 'Stunning library in COEX Mall - Instagram paradise',
  },
];
