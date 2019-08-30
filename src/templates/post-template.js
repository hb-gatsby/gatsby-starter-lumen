// @flow strict
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import type { MarkdownRemark, PathContext } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark,
  },
  pathContext: PathContext,
};

const PostTemplate = ({ data, pathContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription, socialImage } = frontmatter;
  const { next, prev } = pathContext;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;
  const nextPost = next && next.frontmatter.template === 'post' ? { title: next.frontmatter.title, slug: next.fields.slug } : undefined;
  const prevPost = prev && prev.frontmatter.template === 'post' ? { title: prev.frontmatter.title, slug: prev.fields.slug } : undefined;

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      socialImage={socialImage}>
      <Post post={data.markdownRemark} next={nextPost} prev={prevPost} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        socialImage
      }
    }
  }
`;

export default PostTemplate;
