import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';

test('renders Login Page', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/Login Page/i);
  expect(linkElement).toBeInTheDocument();
});
