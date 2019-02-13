import {division} from './division';

describe('division', () =>{ 

    it('it should have 2 numbers', () => {
        expect(division(1,1)).toBe(1);
    })

    it('it should divide correctly 2 numbers', () => {
        expect(division(10,2)).toBe(5);
    })

    it('it should devide 0 correctly', () => {
        expect(division(0,5)).toBe(0);
    })

    it('it should be null if try to devide by 0', () => {
        expect(division(1,0)).toBe(null);
    })

    it('it should give a positive result when devide 2 negative numbers', () => {
        expect(division(-5,-5)).toBe(1);
    })

    it('it should give a negative result when devide 1 negative and one positive number', () => {
        expect(division(5,-5)).toBe(-1);
    })
    
});