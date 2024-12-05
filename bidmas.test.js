const { add, subtract, divide, mutliply } = require('./bidmas.js');

// tests for add function

describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2, 2)).toBe(4);
    });
});

describe('add', () => {
    it('adds 0 and 5', () => {
        expect(add(0, 5)).toBe(5);
    });
});

// tests for the subtract function

describe('subtract', () => {
    it('subtracts 4 from 5', () => {
        expect(subtract(5, 4)).toBe(1)
    })
})

describe('subtract', () => {
    it('subtracts 9 from 3', () => {
        expect(subtract(3, 9)).toBe(-6)
    })
})
describe('divide', () => {
    it('divides 10 by 5', () => {
        expect(divide(10, 5)).toBe(2)
    })
})
describe('multiply', () => {
    it('mutliplys 3 and 4', () => {
        expect(mutliply(3, 4)).toBe(12)
    })
})


