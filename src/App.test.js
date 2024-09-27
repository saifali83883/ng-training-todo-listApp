import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders To-Do List Application heading', () => {
  render(<App />);
  expect(screen.getByText(/To-Do List Application/i)).toBeInTheDocument();
});
