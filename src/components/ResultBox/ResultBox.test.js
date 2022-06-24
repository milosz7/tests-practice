import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const testPLNtoUSD = [
  { input: 7, output: 'PLN 7.00 = $2.00' },
  { input: 3.5, output: 'PLN 3.50 = $1.00' },
  { input: 6, output: 'PLN 6.00 = $1.71' },
  { input: 4, output: 'PLN 4.00 = $1.14' },
];

const testUSDtoPLN = [
  { input: 1, output: '$1.00 = PLN 3.50' },
  { input: 15, output: '$15.00 = PLN 52.50' },
  { input: 30, output: '$30.00 = PLN 105.00' },
  { input: 5, output: '$5.00 = PLN 17.50' },
];

const sameCurrencyTest = [
  {currency:'USD', input: 2, output: '$2.00 = $2.00'},
  {currency:'USD', input: 3, output: '$3.00 = $3.00'},
  {currency:'PLN', input: 5, output: 'PLN 5.00 = PLN 5.00'},
  {currency: 'PLN', input: 234, output: 'PLN 234.00 = PLN 234.00'},
];

const negativeValuesTest = [
  {from: 'USD' , to: 'PLN', input: -3},
  {from: 'PLN', to: 'USD', input: -4},
  {from: 'USD', to: 'USD', input: -54},
  {from: 'PLN', to: 'PLN', input: -7},
];

describe('Component ResultBox', () => {
  it('should render properly', () => {
    render(<ResultBox from="PLN" to="USD" amount={1} />);
  });
  it('should properly convert PLN to USD', () => {
    for (const { input, output } of testPLNtoUSD) {
      render(<ResultBox from="PLN" to="USD" amount={input} />);
      const outputDiv = screen.getByTestId('output');
      expect(outputDiv).toHaveTextContent(output);
      cleanup();
    }
  });
  it('should properly convert USD to PLN', () => {
    for (const { input, output } of testUSDtoPLN) {
      render(<ResultBox from="USD" to="PLN" amount={input} />);
      const outputDiv = screen.getByTestId('output');
      expect(outputDiv).toHaveTextContent(output);
      cleanup();
    }
  });
  it('should return passed value when converting to the same currency', () => {
    for (const {currency, input, output} of sameCurrencyTest) {
      render(<ResultBox from={currency} to={currency} amount={input} />)
        const outputDiv = screen.getByTestId('output');
        expect(outputDiv).toHaveTextContent(output);
        cleanup();
    }
  });
  it('should return a message when passing a negative value', () => {
    for (const {from, to, input} of negativeValuesTest) {
      render(<ResultBox from={from} to={to} amount={input} />)
        const outputDiv = screen.getByTestId('output');
        expect(outputDiv).toHaveTextContent('You cannot convert negative values');
        cleanup();
    }
  })
});
