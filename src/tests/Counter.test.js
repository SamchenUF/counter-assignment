import {render, screen, fireEvent} from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter/>)
})

test('renders counter message', () => {
  const counterHeading = screen.getByRole('heading', {name: /Counter/i});
  expect(counterHeading).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterCount = screen.getByTestId('count');
  expect(counterCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const increment = screen.getByRole('button', {name: '+'});
  fireEvent.click(increment);
  const counterCount = screen.getByTestId('count');
  expect(counterCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const increment = screen.getByRole('button', {name: '+'});
  fireEvent.click(increment);
  const decrement = screen.getByRole('button', {name: '-'});
  fireEvent.click(decrement);
  const counterCount = screen.getByTestId('count');
  expect(counterCount).toHaveTextContent('0');
});
