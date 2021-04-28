const { 
    carList, 
    carFilter, 
    carFilterPrice, 
    carMakeAndPriceFilter
} = require('../main');

describe('JS carFilter tesztelése', () => {
    
    test('Nem létező év tesztelése', () => {
        const results = carFilter(carList, 0);
        expect(results.length).toBe(0);
    });

    test('Egy egyezés tesztelése', () => {
        const results = carFilter(carList, 2013);
        expect(results.length).toBe(1);
        expect(results[0].model).toBe('Zoe');
    });

    test('Kettő egyezés tesztelése', () => {
        const results = carFilter(carList, 2010);
        expect(results.length).toBe(2);
        expect(results[0].model).toBe('Mustang');
        expect(results[1].model).toBe('Ka');
    });

    test('Adott árnál olcsóbb autók keresése', () => {
        const results = carFilterPrice(carList, 10000);
        expect(results.length).toBe(1);
        expect(results[0].model).toBe('Ka');
        //expect(
        //    results.length === 1 &&
        //    results[0].model === 'Ka'
        //).toBeTruthy();
    });

    test('A make tartalmazza a szöveget és az ár alacsonyabb', () => {
        const results = carMakeAndPriceFilter(carList, 'ford', 10000);
        expect(results.length).toBe(1);
        expect(results[0].model).toBe('Ka');
        
    });
});