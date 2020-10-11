import React from 'react';
import Intro from '../Intro';
import FunnySans from '../FunnySans';
import Links from '../Links';
import About from '../About';
import WhatIDo from '../WhatIDo';
import Projects from '../Projects';
import SecretButton from '../SecretButton';
import styles from './index.module.css'

export default () => {

  return <div className={`App ${styles.main} ${styles.dark}`}>
    <div className ={styles.cont}>
      <FunnySans />
      <Intro />
      <Links />
      <About />
      <WhatIDo />
      <Projects />
      <SecretButton />
    </div>
  </div>
}