export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ISlider {
  slider_ID: number;
  image: string;
}

export interface ICart {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  total: number;
}
