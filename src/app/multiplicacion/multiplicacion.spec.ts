import {multiplicacion} from './multiplicacion';

describe('multiplicacion', () => {

	it('It should have at least 2 numbers', () => {
		expect(multiplicacion(1,1)).toBe(1);
	})

	it('It should multiply correctly 2 numbers', () => {
		expect(multiplicacion(3,5)).toBe(15);
	})

	it('It should multiply two negative numbers', () => {
		expect(multiplicacion(-3,-3)).toBe(9);
	})

	it('It should be able to multiply a negative and a positive number',() => {
		expect(multiplicacion(-3,5)).toBe(-15);
	})

	it('It should be able to multiply a positive to a negatice numner', ()=> {
		expect(multiplicacion(3,-10)).toBe(-30);
	})

	it('It should be able to multiply to zero without a problem', () => {
		expect(multiplicacion(0,0)).toBe(0);
	})
});
