import React from 'react';
import styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta: React.FC<Props> = ({ date }) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Published {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
  </div>
);

export default Meta;
