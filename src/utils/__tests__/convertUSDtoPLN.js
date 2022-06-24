import { convertUSDToPLN } from '../convertUSDToPLN';

const properValueTests = [
  { input: 2, output: 'PLN 7.00' },
  { input: 1, output: 'PLN 3.50' },
  { input: -3, output: 'PLN 0.00' },
];

const strTestValues = ['6', '4', 'test'];

const wrongTypesTest = [{}, [], () => {}];

describe('convertUSDtoPLN', () => {
  it('should return proper values', () => {
    for (const { input, output } of properValueTests) {
      expect(convertUSDToPLN(input)).toBe(output);
    }
  });
  it('should return NaN when passed a string', () => {
    for (const input of strTestValues) {
      expect(convertUSDToPLN(input)).toBeNaN();
    }
  });
  it('should return error hen passed an argument of wrong type', () => {
    for (const input of wrongTypesTest) {
      expect(convertUSDToPLN(input)).toBe('Error');
    }
  });
});
