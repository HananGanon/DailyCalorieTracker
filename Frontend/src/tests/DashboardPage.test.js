import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardPage from '../pages/DashboardPage';

test('renders Dashboard Page', () => {
  render(<DashboardPage />);
  const linkElement = screen.getByText(/Dashboard Page/i);
  expect(linkElement).toBeInTheDocument();
});
