import { cleanup } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

afterEach(cleanup);

it('Loading renders without crashing', () => {
  const tree = renderer
    .create(<Loading />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});