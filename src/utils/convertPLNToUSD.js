export const convertPLNToUSD = (PLN) => {

  if(PLN < 0) return('$0.00');
  if(!PLN || typeof PLN === 'string') return NaN;
  if(typeof PLN !== ('number' || 'string')) return 'Error';
  
  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}