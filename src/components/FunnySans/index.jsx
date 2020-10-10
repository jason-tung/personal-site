import React from 'react';
import sans from '../../assets/sans.gif';
import styles from './index.module.css';

export default () => (
  <a  target="_blank" rel="noopener noreferrer" href="https://youtu.be/MLX_aWlQBtU">
    <img alt="dancing sans undertale" src={sans} className={styles.sans}></img>
  </a>
);
