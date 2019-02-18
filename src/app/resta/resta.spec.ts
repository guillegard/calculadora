import {resta} from './resta';

describe('resta', () =>{ 

    it('it should have 2 numbers', () => {
        expect(resta(1,1)).toBe(0);
    })

    it('it should rest correctly 2 numbers', () => {
        expect(resta(5,2)).toBe(3);
    })

    it('it should rest a number with 0 correctly', () => {
        expect(resta(1,0)).toBe(1);
    })

    it('it should rest 0 with a number correctly', () => {
        expect(resta(0,1)).toBe(-1);
    })

    it('it should sum 2 negative numbers', () => {
        expect(resta(-5,5)).toBe(-10);
    })

    it('it should change - to + if the second number is negative', () => {
        expect(resta(1,-2)).toBe(3);
    })

    it('it should rest 2 negative numbers', () => {
        expect(resta(-2,-1)).toBe(-1);
    })
    
});