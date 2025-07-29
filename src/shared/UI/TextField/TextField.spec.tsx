import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TextField } from './TextField';

describe('TextField component', () => {
  test('renders with label and placeholder', () => {
    render(
      <TextField
        onChange={() => {}}
        label="Name"
        placeholder="Enter your name"
      />
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
  });

  test('renders with value', () => {
    render(<TextField onChange={() => {}} value="test value" />);
    const input = screen.getByDisplayValue('test value');
    expect(input).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<TextField onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new text' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('renders error message', () => {
    render(<TextField error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  test('does not call onChange when disabled', async () => {
    const handleChange = jest.fn();
    render(<TextField disabled onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    await userEvent.type(input, 'test');
    expect(handleChange).not.toHaveBeenCalled();
  });
});
