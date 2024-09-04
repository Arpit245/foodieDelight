import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('renders SearchBar with correct label', () => {
    render(<SearchBar searchTerm="" setSearchTerm={() => {}} />);
    expect(screen.getByLabelText(/Search Restaurants with Name/i)).toBeInTheDocument();
  });

  test('calls setSearchTerm on input change', () => {
    const setSearchTerm = jest.fn();
    render(<SearchBar searchTerm="" setSearchTerm={setSearchTerm} />);

    const input = screen.getByLabelText(/Search Restaurants with Name/i);
    fireEvent.change(input, { target: { value: 'Pizza' } });

    expect(setSearchTerm).toHaveBeenCalledWith('Pizza');
  });

  test('input value reflects searchTerm prop', () => {
    render(<SearchBar searchTerm="Pasta" setSearchTerm={() => {}} />);
    const input = screen.getByLabelText(/Search Restaurants with Name/i);
    expect(input.value).toBe('Pasta');
  });
});
