const model = {
  events: [{
    name: 'Event Name1',
    id: 1,
    featured: true,
    description: 'Event description1',
    date: new Date(),
    price: '25.00',
    category: 'Music',
    address: '123 Main Street',
    city: 'Canyon',
    state: 'Texas',
    zipCode: '79102',
    categories: ['Foo', 'Bar', 'Biz']
  }, {
    name: 'Event Name2',
    id: 2,
    featured: true,
    description: 'Event description2',
    date: (new Date()).setDate((new Date())+1),
    price: '25.00',
    category: 'Music',
    address: '123 Main Street',
    city: 'Canyon',
    state: 'Texas',
    zipCode: '79102',
    categories: ['Foo', 'Bar', 'Biz']
  },
  {
    name: 'Event Name3',
    id: 3,
    featured: false,
    description: 'Event description3',
    date: '10/23/2017',
    price: '25.00',
    category: 'Music',
    address: '123 Main Street',
    city: 'Canyon',
    state: 'Texas',
    zipCode: '79102',
    categories: ['Foo', 'Bar', 'Biz']
  },
  {
    name: 'Event Name1',
    id: 4,
    featured: false,
    description: 'Event description1',
    date: '10/23/2017',
    price: '25.00',
    category: 'Music',
    address: '123 Main Street',
    city: 'Canyon',
    state: 'Texas',
    zipCode: '79102',
    categories: ['Foo', 'Bar', 'Biz']
  }, {
    name: 'Event Name2',
    id: 5,
    featured: true,
    description: 'Event description2',
    date: '11/23/2017',
    price: '2.00',
    category: 'Music',
    address: '123 Main Street',
    city: 'Canyon',
    state: 'Texas',
    zipCode: '79102',
    categories: ['Foo', 'Bar', 'Biz']
  },
  {
    name: 'Event Name3',
    id: 6,
    featured: false,
    description: 'Event description3',
    date: '12/23/2017',
    price: '5.00',
    category: 'Music',
    address: '123 Main Street',
    city: 'Canyon',
    state: 'Texas',
    zipCode: '79102',
    categories: ['Foo', 'Bar', 'Biz']
  }]
};

export default model;
