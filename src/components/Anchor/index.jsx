import React from 'react';
import styles from './index.module.css';

export default ({link, children}) => (
  <a href = {link} target="_blank" rel="noopener noreferrer" className={styles.lnk}>{children} </a>
);
