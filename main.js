const carList = [
    {
        id: 1,
        make: 'Ford',
        model: 'Mustang',
        year: 2010,
        price: 20000
    },
    {
        id: 2,
        make: 'Renault',
        model: 'Zoe',
        year: 2013,
        price: 10000
    },
    {
        id: 3,
        make: 'Ford',
        model: 'Ka',
        year: 2010,
        price: 3500
    },
    {
        id: 4,
        make: 'Nissan',
        model: 'Leaf',
        year: 2014,
        price: 12000
    },
];

const carFilter = (list, year,) => {
    return list.filter( car => car.year === year );
};

const carFilterPrice = (list, price) => {
    return list.filter( car => car.price < price );
};

const carMakeAndPriceFilter = (list, make, price) => {
    return list.filter( car => {
        return car.make.toLowerCase().includes(make.toLowerCase()) 
        && car.price < price;
    });
};

if (typeof module !== 'undefined') {
  module.exports = {
      carList,
      carFilter,
      carFilterPrice,
      carMakeAndPriceFilter
  };

}


