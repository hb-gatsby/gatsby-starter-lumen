import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import Disqus from '../Disqus/Disqus';
import './style.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author, disqusShortname, url } = this.props.siteMetadata;
    const post = this.props.post;
    const tags = post.fields.tagSlugs;

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">All Articles</Link>
      </div>
    );

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags && tags.map((tag, i) => (
            <li className="post-single__tags-list-item" key={tag}>
              <Link to={tag} className="post-single__tags-list-item-link">
                {post.frontmatter.tags[i]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

    const commentsBlock = (
      <div>
        <Disqus
          postNode={post}
          siteMetadata={this.props.data.site.siteMetadata}
          path={this.props.location.pathname}
        />
      </div>
    );

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="post-single__date">
              <em>Published {moment(post.frontmatter.date).format('D MMM YYYY')}</em>
            </div>
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr />
            <p className="post-single__footer-text">
              {subtitle}
              <a href={`https://twitter.com/${author.twitter}`} target="_blank" rel="noopener noreferrer">
                <br /> <strong>{author.name}</strong> on Twitter
              </a>
            </p>
            {disqusShortname && commentsBlock}
          </div>
        </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
