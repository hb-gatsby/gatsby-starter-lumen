// @flow strict
import { StaticQuery, useStaticQuery } from 'gatsby';
import React from 'react';
import renderer from 'react-test-renderer';
import siteMetadata from '../../../jest/__fixtures__/site-metadata';
import Post from './Post';
import type { RenderCallback } from '../../types';

describe('Post', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  const props = {
    post: {
      id: 'test-123',
      html: '<p>test</p>',
      fields: {
        slug: '/test',
        categorySlug: '/test-category',
        tagSlugs: ['/test_0', '/test_1'],
      },
      frontmatter: {
        date: '2016-09-01',
        tags: ['test_0', 'test_1'],
        title: 'test',
      },
    },
    next: {
      title: 'Test 123',
      slug: '/posts/test-123',
    },
    prev: {
      title: 'Test 321',
      slug: '/posts/test-321',
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Post {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
