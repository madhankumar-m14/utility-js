const reduce = require('./reduce');

describe("Reduce", () => {
    test("reduce([],(x,y) => x+y)",() => {
        expect(reduce([],"sum")).toEqual(undefined);
    })

    test("reduce([],(x,y) => x+y, 10)",() => {
        expect(reduce([], "sum", 10)).toEqual(10);
    })

    test("reduce(['a','b','c'],(x,y) => x+y)",() => {
        expect(reduce(['a', 'b', 'c'], "sum")).toEqual("abc");
    })

    test("reduce(['a','b','c'],(x,y) => x+y, 'z')",() => {
        expect(reduce(['a', 'b', 'c'], "appendfront")).toEqual("zabc");
    })
})
