const multiply = require('./multiply');

test("times 3 * 5 to be equal 15", ()=> {
    expect(multiply(3,5)).toBe(15);
})