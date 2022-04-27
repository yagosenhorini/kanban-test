import { priceFormatter } from '@Utils/priceFormatter';

describe('Price Formatter util', () => {
  it('should format a value to brazillian currency', () => {
    const value = 350;
    const currency = 'BRL';
    expect(priceFormatter(value, currency)).toBe('R$ 350,00');
  });
  it('should not format an empty value', () => {
    const value = '';
    const currency = 'BRL';

    expect(() => {
      priceFormatter(value, currency)
    }).toThrowError();
  })
})