import React from 'react';
import { render, screen } from '@testing-library/react';
import FoodSearchPage from '../pages/FoodSearchPage';

test('renders Food Search Page', () => {
  render(<FoodSearchPage />);
  const linkElement = screen.getByText(/Food Search Page/i);
  expect(linkElement).toBeInTheDocument();
});
