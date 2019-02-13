import {exponential} from './exponential';

describe('exponential', () =>{ 

    it('it should have 2 numbers', () => {
        expect(exponential(2,2)).toBe(4);
    })

    it('it should be 1 when second number is 0', () => {
        expect(exponential(2,0)).toBe(1);
    })

    it('it should be 0 when first number is 0', () => {
        expect(exponential(0,2)).toBe(0);
    })

    it('it should do the exponential', () => {
        expect(exponential(5,5)).toBe(3125);
    })

    it('it should be 1 when the 2 numbers are 0', () => {
        expect(exponential(0,0)).toBe(1);
    })
    
});