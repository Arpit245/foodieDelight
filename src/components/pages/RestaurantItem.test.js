import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RestaurantItem from './RestaurantItem'; 

describe('RestaurantItem Component', () => {
  const item = {
    name: 'Restaurant Name',
    description: 'A short description of the restaurant.',
    location: 'Restaurant Location',
  };
  const itemid = 1;
  const deleteItem = jest.fn();
  const editItem = jest.fn();

  beforeEach(() => {
    render(
      <RestaurantItem
        item={item}
        itemid={itemid}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    );
  });

  test('renders restaurant information correctly', () => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
    expect(screen.getByText(item.location)).toBeInTheDocument();
  });
});
