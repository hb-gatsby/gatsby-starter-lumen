import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import React from 'react';
import styles from './PrevNext.module.scss';

type Props = {
  next: {
    title: string,
    slug: string,
  },
  prev: {
    title: string,
    slug: string,
  },
};

const cx = classNames.bind(styles);

const PrevNext = ({ next, prev }: Props) => {
  const prevClassName = cx({
    'prev-next__prev-link': true,
    'prev-next__prev-link--disable': !prev,
  });

  const nextClassName = cx({
    'prev-next__next-link': true,
    'prev-next__next-link--disable': !next,
  });

  return (
    <div className={styles['prev-next']}>
      <div className={styles['prev-next__prev']}>
        <Link to={prev ? prev.slug : '/'} className={prevClassName}>
          {prev ? `← ${prev.title}` : ' '}
        </Link>
      </div>
      <div className={styles['prev-next__next']}>
        <Link to={next ? next.slug : '/'} className={nextClassName}>
          {next ? `${next.title} →` : ' '}
        </Link>
      </div>
    </div>
  );
};

export default PrevNext;
