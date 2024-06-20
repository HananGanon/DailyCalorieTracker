import React from 'react';
import { render, screen } from '@testing-library/react';
import SettingsPage from '../pages/SettingsPage';

test('renders Settings Page', () => {
  render(<SettingsPage />);
  const linkElement = screen.getByText(/Settings Page/i);
  expect(linkElement).toBeInTheDocument();
});
