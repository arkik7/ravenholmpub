export interface Food {
  name: string;
  price: number;
  description: string;
  _id: number;
}


export interface Item {
  _id: string
  name: string;
  image: any;
  categories: {
    title: string;
    description: string;
    _key: string;
  }[];
  allergens: {
    title: string;
    description: string;
    code: string;
    _key: string;
  }[];
  price: any;
  menuPrice: any;
  slug: {
    current: string;
  };
  details: string;
}

export interface DailyMenu {
  _id: string;
  day: string;
  foods: Item[];
  message: string;
  slug: {
    current: string;
  };
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