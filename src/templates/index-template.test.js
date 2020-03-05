// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery, useStaticQuery } from 'gatsby';
import IndexTemplate from './index-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../jest/__fixtures__/all-markdown-remark';
import pageContext from '../../jest/__fixtures__/page-context';
import type { RenderCallback } from '../types';

describe('IndexTemplate', () => {
  const props = {
    data: {
      ...allMarkdownRemark
    },
    ...pageContext
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => (
        render(siteMetadata)
      ),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it('renders correctly', () => {
    const tree = renderer.create(<IndexTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
