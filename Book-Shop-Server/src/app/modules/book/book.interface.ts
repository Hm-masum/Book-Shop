export interface IBook {
  title: string;
  author: string;
  price: number;
  category:
    | 'Fiction'
    | 'Novel'
    | 'Biography'
    | 'Mystery'
    | 'Thrillers'
    | 'History'
    | 'Religious';
  image: string;
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}
