import React from 'react';
import { render, screen } from '@testing-library/react';
import FoodDiaryPage from '../pages/FoodDiaryPage';

test('renders Food Diary Page', () => {
  render(<FoodDiaryPage />);
  const linkElement = screen.getByText(/Food Diary Page/i);
  expect(linkElement).toBeInTheDocument();
});
