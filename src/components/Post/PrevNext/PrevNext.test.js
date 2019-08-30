import React from 'react';
import renderer from 'react-test-renderer';
import PrevNext from './PrevNext';

describe('PrevNext', () => {
  const props = {
    next: {
      title: 'Test Post 3',
      slug: '/posts/test-post-3',
    },
    prev: {
      title: 'Test Post 1',
      slug: '/posts/test-post-1',
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<PrevNext {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
