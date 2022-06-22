import { cleanup, render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';

const testCases = [
  { amount: '100', from: 'PLN', to: 'USD' },
  { amount: '20', from: 'USD', to: 'PLN' },
  { amount: '200', from: 'PLN', to: 'USD' },
  { amount: '345', from: 'USD', to: 'PLN' },
];

describe('Component CurrencyForm', () => {
    it('should render without crashing', () => {
      render(<CurrencyForm action={() => {}} />);
    });
    for (const {amount, from, to} of testCases) {
    it('should run callback with proper data on submit', () => {
      const action = jest.fn();

      render(<CurrencyForm action={action} />);

      const submitButton = screen.getByText('Convert');

      const amountElem = screen.getByTestId('amount');
      const fromElem = screen.getByTestId('from');
      const toElem = screen.getByTestId('to');

      userEvent.type(amountElem, amount);
      userEvent.selectOptions(fromElem, from);
      userEvent.selectOptions(toElem, to);

      userEvent.click(submitButton);

      expect(action).toHaveBeenCalledTimes(1);
      expect(action).toHaveBeenCalledWith({
        amount: +amount,
        from,
        to,
      });
    });
    cleanup();
  }
});
