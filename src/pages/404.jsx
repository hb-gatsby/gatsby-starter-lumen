import React from 'react';
import Sidebar from '../components/Sidebar';

class NotFoundRoute extends React.Component {
  render() {
    return (
      <div>
        <Sidebar siteMetadata={this.props.data.site.siteMetadata} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">NOT FOUND</h1>
              <div className="page__body">
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        ...sidebarFragment
      }
    }
  }
`;
