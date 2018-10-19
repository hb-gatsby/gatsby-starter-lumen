import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';

class CategoriesRoute extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const categories = this.props.data.allMarkdownRemark.group;

    return (
      <div>
        <Helmet title={`All Categories - ${title}`} />
        <Sidebar siteMetadata={this.props.data.site.siteMetadata} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Categories</h1>
              <div className="page__body">
                <div className="categories">
                  <ul className="categories__list">
                    {categories.map(category => (
                      <li key={category.fieldValue} className="categories__list-item">
                        <Link to={`/categories/${kebabCase(category.fieldValue)}/`} className="categories__list-item-link">
                          {category.fieldValue} ({category.totalCount})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesRoute;

export const pageQuery = graphql`
  query CategoryesQuery {
    site {
      siteMetadata {
        ...sidebarFragment
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
