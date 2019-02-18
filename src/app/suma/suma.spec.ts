import {suma} from './suma';

describe('suma', () => {

	it('It should have at least 2 numbers', () => {
		expect(suma(1,1)).toBe(2);
	})

	it('It should add correctly 2 numbers', () => {
		expect(suma(3,5)).toBe(8);
	})

	it('It should add two negative numbers', () => {
		expect(suma(-3,-3)).toBe(-6);
	})

	it('It should be able to add a negative and a positive number',() => {
		expect(suma(-3,5)).toBe(2);
	})

	it('It should be able to add a positive to a negatice numner', ()=> {
		expect(suma(3,-5)).toBe(-2);
	})

	it('It should be able to add to zero without a problem', () => {
		expect(suma(0,0)).toBe(0);
	})
});