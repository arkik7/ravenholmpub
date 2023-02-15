export interface Food {
  name: string;
  price: number;
  description: string;
  _id: number;
}


export interface Contact {
  _id: number;
  street: string;
  postcode: number;
  city: string;
  country: string;
  phone: 666666,
  email: string;
  openinghours: {
    day: string;
    hour: string;
  }[];
}


export interface Configuration {
  _id: number;
  titles: {
    _type: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
  }[];
}