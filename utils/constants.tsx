export const food = [
  {
    name: 'Burger',
    price: 20.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
    _id: 1
  },
  {
    name: 'Pizza',
    price: 10.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac placerat dui.",
    _id: 2
  },
];


export const contact = [
  {
    _id: 1,
    street: 'Test 666',
    postcode: 666,
    city: 'Brno',
    country: 'Cz',
    phone: 666666,
    email: 'test@test.com',
    openinghours: [
      {
        day: 'Monday',
        hour: '09-23'
      },
      {
        day: 'Tuesday',
        hour: '09-23'
      }
    ]
  }
]


export const configuration = [ //needs some changes
  {
    _id: 1,
    titles: [
      {
        _type: 'contact',
        title1: 'Address',
        title2: 'Phone',
        title3: 'Email',
        title4: 'Opening Hours'
      }
    ],
  }
]