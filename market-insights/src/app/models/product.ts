export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  imageUrl: string | null;
  region: string;
  listedDate: Date;
}
