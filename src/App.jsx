import React, { useState } from 'react';
import './App.css';
import Intro from './components/Intro';
import FunnySans from './components/FunnySans';
import styles from './App.module.css';

function App() {
  const [light, setLight] = useState(false);
  return (
    <div className={`App ${styles.main} ${light ? styles.light : styles.dark}`}>
      <div>
        <FunnySans />
        <Intro />
      </div>
    </div>
  );
}

export default App;
