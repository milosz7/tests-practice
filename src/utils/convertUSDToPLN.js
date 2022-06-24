export const convertUSDToPLN = (USD) => {

  if (USD < 0) return 'PLN 0.00';
  if (typeof USD === 'string') return NaN;
  if (typeof USD !== ('number' || 'string')) return 'Error';

  const USDtoPLN = USD * 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PLN'
  });

  return formatter.format(USDtoPLN).replace(/\u00a0/g, ' ');
}