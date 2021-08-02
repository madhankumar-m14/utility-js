const map = require('./map');

describe("Map",() => {

    it("cube of []",() => {
        expect(map([],"cube")).toEqual([]);
    })

    it("identity of [1,2,3]", () => {
        expect(map([1,2,3], "identity")).toEqual([1,2,3]);
    })

    it("cube of [1,2,3]", () => {
        expect(map([1,2,3], "cube")).toEqual([1,8,27]);
    })
})
