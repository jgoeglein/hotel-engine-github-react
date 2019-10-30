import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from './SearchBar';

afterEach(cleanup);

it('SearchBar renders without crashing', () => {
  const tree = renderer
    .create(<SearchBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Notifies props.handleSearch correctly', () => {
    const onSearch = jest.fn();
    const { getByText, getByPlaceholderText } = render(
        <SearchBar handleSearch={onSearch} />,
    );
    fireEvent.change(getByPlaceholderText('Search...'), 'Testing 123');
    fireEvent.submit(getByText('Search'));
    expect(onSearch.mock.calls.length).toBe(1);
});
