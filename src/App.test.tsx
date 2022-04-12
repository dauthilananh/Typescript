import React from 'react';
import { render, screen } from '@testing-library/react';
import App_clone from './App_clone';

test('renders learn react link', () => {
  render(<App_clone />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
