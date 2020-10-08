import React, { useState } from 'react';
import Intro from '../Intro';
import FunnySans from '../FunnySans';
import Links from '../Links';
import styles from './index.module.css'

export default () => {

  const [light, setLight] = useState(false);
  return <div className={`App ${styles.main} ${light ? styles.light : styles.dark}`}>
    <div>
      <FunnySans />
      <Intro />
      <Links />
    </div>
  </div>
}