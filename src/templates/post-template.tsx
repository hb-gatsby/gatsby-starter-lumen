import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';
import { MarkdownRemark } from '../types';

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

const PostTemplate: React.FC<Props> = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const { frontmatter } = data.markdownRemark;
  const { title: postTitle, description: postDescription = '', socialImage } = frontmatter;
  const metaDescription = postDescription || siteSubtitle;
  const socialImageUrl = socialImage?.publicURL;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription} socialImage={socialImageUrl} >
      <Post post={data.markdownRemark} />
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
        socialImage {
          publicURL
        }
      }
    }
  }
`;

export default PostTemplate;
