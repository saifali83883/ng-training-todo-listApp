import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

describe('TaskForm Component', () => {
  const mockOnSave = jest.fn();

  it('renders the TaskForm component correctly', () => {
    render(<TaskForm currentTask={null} onSave={mockOnSave} />);
    expect(screen.getByText('Add Task')).toBeInTheDocument();
    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
    expect(screen.getByLabelText('Description:')).toBeInTheDocument();
  });

  it('handles input changes', () => {
    render(<TaskForm currentTask={null} onSave={mockOnSave} />);
    
    // Simulate user typing in the title field
    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Test Task' } });
    expect(screen.getByLabelText('Title:').value).toBe('Test Task');

    // Simulate user typing in the description field
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Test Description' } });
    expect(screen.getByLabelText('Description:').value).toBe('Test Description');
  });

  it('calls onSave when the form is submitted', () => {
    render(<TaskForm currentTask={null} onSave={mockOnSave} />);
    
    // Simulate user entering data and submitting the form
    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Test Task' } });
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Test Description' } });
    
    fireEvent.submit(screen.getByRole('button', { name: 'Save Task' }));
    
    expect(mockOnSave).toHaveBeenCalledWith({ title: 'Test Task', description: 'Test Description' });
  });
});
