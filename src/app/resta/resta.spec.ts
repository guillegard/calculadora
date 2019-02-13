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
    
});