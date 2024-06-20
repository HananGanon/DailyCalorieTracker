import React from 'react';
import { render, screen } from '@testing-library/react';
import FoodDetailsPage from '../pages/FoodDetailsPage';

test('renders Food Details Page', () => {
  render(<FoodDetailsPage />);
  const linkElement = screen.getByText(/Food Details Page/i);
  expect(linkElement).toBeInTheDocument();
});
