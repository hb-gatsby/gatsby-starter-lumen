// @flow strict
import { Link } from 'gatsby';
import React from 'react';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import styles from './Post.module.scss';
import PrevNext from './PrevNext';
import Tags from './Tags';
import type { Node } from '../../types';

type Props = {
  post: Node,
  next: {
    title: string | undefined,
    slug: string | undefined,
  },
  prev: {
    title: string | undefined,
    slug: string | undefined,
  },
};

const Post = ({ post, next, prev }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to='/'>
        All Articles
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
        <PrevNext next={next} prev={prev} />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
