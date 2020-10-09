import React, { useState } from 'react';
import Intro from '../Intro';
import FunnySans from '../FunnySans';
import Links from '../Links';
import About from '../About';
import styles from './index.module.css'

export default () => {

  const [light, setLight] = useState(false);
  return <div className={`App ${styles.main} ${light ? styles.light : styles.dark}`}>
    <div className ={styles.cont}>
      <FunnySans />
      <Intro />
      <Links />
      <About />
    </div>
  </div>
}