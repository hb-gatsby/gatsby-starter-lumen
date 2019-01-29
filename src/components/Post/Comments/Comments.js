import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import ReactDisqusComments from 'react-disqus-comments';
import md5 from 'md5';
import 'gitalk/dist/gitalk.css';
import GitalkComponent from 'gitalk/dist/gitalk-component';

export const PureComments = ({ data, postTitle, postSlug }) => {
  const {
    siteUrl,
    disqusShortname,
    gitalkConf
  } = data.site.siteMetadata;

  const isBrowser = typeof window !== 'undefined';
  if (disqusShortname) {
    return (
      <ReactDisqusComments
        shortname={disqusShortname}
        identifier={postTitle}
        title={postTitle}
        url={siteUrl + postSlug}
      />
    );
  } else if (gitalkConf.turnOn && isBrowser) {
    // MD5 post URL to avoid github label limitation.
    // https://github.com/gitalk/gitalk/issues/115#issuecomment-375954482
    // You can also overwrite options at here.
    // More detail: https://github.com/gitalk/gitalk
    const gitalkIds = Object.assign({}, gitalkConf, {
      id: md5(postSlug)
    });

    return (
      <div>
        <GitalkComponent
          options={gitalkIds}
        />
      </div>
    )
  } else {
    return null;
  }
};

export const Comments = (props) => (
  <StaticQuery
    query={graphql`
      query CommentsQuery {
        site {
          siteMetadata {
            disqusShortname
            url
            gitalkConf {
              turnOn
              clientID
              clientSecret
              repo
              admin
              owner
            }
          }
        }
      }
    `}
    render={(data) => <PureComments {...props} data={data}/>}
  />
);

export default Comments;
