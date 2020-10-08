import React from 'react';
import bg from '../../assets/sans.gif';
import styles from './index.module.css';

export default () => (
  <div className={styles.bgWrapper}>
    {/* <video autoPlay loop muted>
  <source src={bg} type="image/gif" />
</video> */}
    <img src={bg} alt="sans" className={styles.bg} />
  </div>
);
