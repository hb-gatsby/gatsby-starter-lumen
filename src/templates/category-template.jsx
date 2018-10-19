import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';

class CategoryTemplate extends React.Component {
  render() {
    const title = this.props.data.site.siteMetadata.title;
    const category = this.props.pathContext.category;
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div>
        <Helmet title={`${category} - ${title}`} />
        <Sidebar siteMetadata={this.props.data.site.siteMetadata} />
        <CategoryTemplateDetails category={category} posts={posts} />
      </div>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        ...sidebarFragment
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { category: { eq: $category }, layout: { eq: "post" }, draft: { ne: true } } },
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
