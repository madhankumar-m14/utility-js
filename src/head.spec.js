const head = require('./head');

describe('Head', () => {

    test('Head for list[1,2,3]', ()=>{
        expect(head([1,2,3])).toEqual(1);
    });

    it('Head for list[]',()=>{
        expect(head([])).toEqual(null);
    });
})
