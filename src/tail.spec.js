const tail = require('./tail');

describe('Tail',() => {
    test('Tail of list[1,2,3]',() => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    test('Tail of []',() => {
        expect(tail([])).toEqual([]);
    })
})
