import React, { useState } from 'react';
import './App.css';
import Background from './components/Background';
import Intro from './components/Intro';
import Header from './components/Header';
import styles from './App.module.css';

function App() {
  const [light, setLight] = useState(true);
  return (
    <div className={`App ${light ? styles.light : styles.dark}`}>
      <div>
        <Header setLight={setLight} />
        <Intro />
        <Background />
      </div>
    </div>
  );
}

export default App;
