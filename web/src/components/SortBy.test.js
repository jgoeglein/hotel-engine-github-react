import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import SortBy, { SORT_OPTIONS } from './SortBy';

afterEach(cleanup);

it('SortBy renders without crashing', () => {
  const tree = renderer
    .create(<SortBy />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Notifies props.handleChange correctly', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
        <SortBy handleChange={onChange} />,
    );
    fireEvent.click(getByLabelText(/Stars/i));
    expect(onChange.mock.calls.length).toBe(1);
});

it('Renders all options', () => {
    const { queryByLabelText } = render(
        <SortBy  />,
    );
    for(const option of Reflect.ownKeys(SORT_OPTIONS)) {
        expect(queryByLabelText(option)).toBeTruthy();
    }
});