// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const isExternalLink = (path) => path.startsWith('https://') || path.startsWith('http://');

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          {!isExternalLink(item.path) ? (<Link
            to={item.path}
            className={styles['menu__list-item-link']}
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>) : (
            <a target="_blank" href={item.path} className={styles['menu__list-item-link']}>
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
