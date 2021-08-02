const min = require('./min');

describe("Min",() => {
    test('Min of [1,2,3,4]', () => {
        expect(min([1,2,3,4])).toEqual(1);
    })
})
