// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Page from './Page';

describe('Page', () => {
  const props = {
    children: 'test',
    title: 'test',
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Page {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
