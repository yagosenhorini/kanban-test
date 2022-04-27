export const priceFormatter = (value, currency: string): string => {
  const numberValue = parseFloat(value);

  if (Number.isNaN(numberValue)) {
    throw new Error('Please check your arguments');
  }

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  });
  return formatter.format(value).trim();
};
