// @flow strict
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';
import styles from './Pagination.module.scss';

type Props = {
  prevPagePath: string,
  nextPagePath: string,
  hasNextPage: boolean,
  hasPrevPage: boolean
};

const cx = classNames.bind(styles);

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage
}: Props) => {
  const prevClassName = cx({
    'pagination__prev-link': true,
    'pagination__prev-link--disable': !hasPrevPage
  });

  const nextClassName = cx({
    'pagination__next-link': true,
    'pagination__next-link--disable': !hasNextPage
  });

  return (
    <div className={styles['pagination']}>
      <div className={styles['pagination__prev']}>
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'} className={prevClassName}>{PAGINATION.PREV_PAGE}</Link>
      </div>
      <div className={styles['pagination__next']}>
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'} className={nextClassName}>{PAGINATION.NEXT_PAGE}</Link>
      </div>
    </div>
  );
};

export default Pagination;
