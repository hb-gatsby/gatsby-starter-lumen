// @flow strict
import { graphql } from 'gatsby';

const useTagsList = () => {
  const { allMarkdownRemark } = graphql`
    query TagsListQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { template: { eq: "post" }, draft: { ne: true } }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `;

  return allMarkdownRemark.group;
};

export default useTagsList;
