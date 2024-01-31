export type ListItem = {
  name: string;
  active: boolean;
  image?: string;
};

export type Item = {
  id: number;
  name: string;
  active: boolean;
  image: string;
  review: number;
  type: string;
  price: number;
};

export type Nav = {
  id: number;
  active: boolean;
};
