// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import get from 'lodash/get';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => {
  const socialImage = get(edges[0], 'node.frontmatter.socialImage', null);
  console.log(edges);
  return (
    <div className={styles['feed']}>
      {edges.map((edge) => (
        <div className={styles['feed__item']} key={edge.node.fields.slug}>
          <div className={styles['feed__item-meta']}>
            <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
              {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
            </time>
            <span className={styles['feed__item-meta-divider']} />
            <span className={styles['feed__item-meta-category']}>
              <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
            </span>
          </div>
          <h2 className={styles['feed__item-title']}>
            <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          </h2>
          {socialImage && <img alt="" src={socialImage} />}
          <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
          <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link>
        </div>
      ))}
    </div>
  );
};

export default Feed;
