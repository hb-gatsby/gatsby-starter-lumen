import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import TagTemplateDetails from '../components/TagTemplateDetails';

class TagTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { tag } = this.props.pathContext;

    return (
      <div>
        <Helmet title={`All Posts tagged as "${tag}" - ${title}`} />
        <Sidebar siteMetadata={this.props.data.site.siteMetadata} />
        <TagTemplateDetails posts={this.props.data.allMarkdownRemark.edges} tag={tag} />
      </div>
    );
  }
}

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        ...sidebarFragment
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { tags: { in: [$tag] }, layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
