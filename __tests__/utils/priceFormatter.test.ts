import { priceFormatter } from '@Utils/priceFormatter';

describe('Price Formatter util', () => {
  it('should format a value to brazillian currency', () => {
    expect(priceFormatter(350, 'BRL')).toBe('R$\xa0350,00');
  });

  it('should not format an empty value', () => {
    expect(() => {
      priceFormatter('', 'BRL');
    }).toThrowError();
  });

  it('should throw error if an empty array was passed in parameter', () => {
    expect(() => {
      priceFormatter([], 'BRL');
    }).toThrowError();
  });
});
