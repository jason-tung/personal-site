import React, { useState } from 'react';
import './App.css';
import Intro from './components/Intro';
import styles from './App.module.css';

function App() {
  const [light, setLight] = useState(true);
  return (
    <div className={`App ${light ? styles.light : styles.dark}`}>
      <div>
        <Intro></Intro>
      </div>
    </div>
  );
}

export default App;
