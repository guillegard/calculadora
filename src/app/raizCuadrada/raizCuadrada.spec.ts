import {raizCuadrada} from './raizCuadrada';

describe('raizCuadrada', () => {

	it('It should have at least 1 number', () => {
		expect(raizCuadrada(1)).toBe(1);
	})

	it('It should calculate de sqrt of a number correctly', () => {
		expect(raizCuadrada(9)).toBe(3);
	})

	it('It should not be able to calculate a negative sqrt', () => {
		expect(raizCuadrada(-3)).toBe(null);
	})

	it('It should be able calculate sqrt of 0',() => {
		expect(raizCuadrada(0)).toBe(0);
	})

});
