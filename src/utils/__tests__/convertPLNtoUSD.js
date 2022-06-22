import { convertPLNToUSD } from './../convertPLNToUSD';

describe('convertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when passed a string', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('36')).toBeNaN();
    expect(convertPLNToUSD('9')).toBeNaN();
    expect(convertPLNToUSD('test')).toBeNaN();
  });
  it('should return NaN when passed no arguments', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });
  it('should return error when argument is not a string or number', () => {
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(new Date())).toBe('Error');
  })
  it('should return 0 for negative values', () => {
    expect(convertPLNToUSD(-5)).toBe('$0.00');
    expect(convertPLNToUSD(-3)).toBe('$0.00');
    expect(convertPLNToUSD(-24)).toBe('$0.00');
  })
});