import { convertPLNToUSD } from './../convertPLNToUSD';

const properValueInputs = [
  { input: 1, output: '$0.29' },
  { input: 2, output: '$0.57' },
  { input: 20, output: '$5.71' },
  { input: 12, output: '$3.43' },
];

const strToNaNInputs = ['6', '36', '9', 'test'];

const wrongTypesInputs = [{}, [], new Date()];

const negativeValueInputs = [-5, -3, -24];

describe('convertPLNtoUSD', () => {
  for (const { input, output } of properValueInputs) {
    it('should return proper value when good input', () => {
      expect(convertPLNToUSD(input)).toBe(output);
    });
  }
  for (const input of strToNaNInputs) {
    it('should return NaN when passed a string', () => {
      expect(convertPLNToUSD(input)).toBeNaN();
    });
  }
  it('should return NaN when passed no arguments', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  for (const input of wrongTypesInputs) {
    it('should return error when argument is not a string or number', () => {
      expect(convertPLNToUSD(input)).toBe('Error');
    });    
  }
  for (const input of negativeValueInputs) {
    it('should return 0 for negative values', () => {
      expect(convertPLNToUSD(input)).toBe('$0.00');
    });
  }
});
