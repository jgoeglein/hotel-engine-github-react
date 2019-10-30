import { cleanup, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchResult from './SearchResult';

afterEach(cleanup);

const testResult = {
  html_url: "fakeurl",
  description: "fake description",
  stargazers_count: 100,
  name: "fake repo name",
  language: "JS",
  owner: {
    login: "login"
  }
}

it('SearchResult renders without crashing', () => {
  const tree = renderer
    .create(<SearchResult result={testResult} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders Unspecified when language is not returned', () => {
  const nullLanguage = {
    ...testResult,
    language: null
  };
  const { queryByText } = render(
    <SearchResult result={nullLanguage} />
  );
  expect(queryByText(/Not specified/i)).toBeTruthy();
});