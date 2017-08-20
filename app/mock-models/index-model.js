const today = new Date();

const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);



const model = {
  events: [{
    name: 'Event Name1',
    eventId: 1,
    featured: true,
    description: 'Event description1',
    date: today,
    price: '25.00',
    category: 'Music',
    address: '123 Main Street',
    city: 'Canyon',
    state: 'Texas',
    zipCode: '79102',
    categories: ['Foo', 'Bar', 'Biz']
  }, {
    name: 'Event Name2',
    eventId: 2,
    featured: true,
    description: 'Event description2',
    date: tomorrow,
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
    eventId: 3,
    featured: false,
    description: 'Event description3',
    date: today,
    price: '25.00',
    category: 'Music',
    address: '123 Main Street',
    city: 'Canyon',
    state: 'Texas',
    zipCode: '79102',
    categories: ['Foo', 'Bar', 'Biz']
  },
  {
    name: 'Event Name4',
    eventId: 4,
    featured: false,
    description: 'Event description4',
    date: tomorrow,
    price: '25.00',
    category: 'Music',
    address: '123 Main Street',
    city: 'Canyon',
    state: 'Texas',
    zipCode: '79102',
    categories: ['Foo', 'Bar', 'Biz']
  }, {
    name: 'Event Name5',
    eventId: 5,
    featured: true,
    description: 'Event description5',
    date: today,
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
    eventId: 6,
    featured: false,
    description: 'Event description3',
    date: tomorrow,
    price: '5.00',
    category: 'Music',
    address: '123 Main Street',
    city: 'Canyon',
    state: 'Texas',
    zipCode: '79102',
    categories: ['Foo', 'Bar', 'Biz']
  }],
  newModel: function() {
    let newModel = {};
    newModel.name = 'New Event';
    newModel.eventId = -1;
    newModel.featured = false;
    newModel.description = 'new event';
    newModel.date = today;
    newModel.price = '0.00';
    newModel.category = '';
    newModel.address = '';
    newModel.city = 'Amarillo';
    newModel.state = 'Texas';
    newModel.zipCode = '';
    newModel.categories = [];
    return newModel;
  },
  };


export {model, today, tomorrow};
