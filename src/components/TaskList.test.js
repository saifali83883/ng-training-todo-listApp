import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';  // Correct import

describe('TaskList Component', () => {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1' },
    { id: 2, title: 'Task 2', description: 'Description 2' },
  ];

  test('renders task list', () => {
    render(<TaskList tasks={tasks} onDelete={() => {}} onEdit={() => {}} />);
    expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Task 2/i)).toBeInTheDocument();
  });
});
