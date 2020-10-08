import React from 'react';
import styles from './index.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';

export default () => (
  <div className={styles.intro}>
    <p className={styles.hi}>hi im jason</p>
    <p className={styles.whatdoido}>
      i like to play osu, code, do homework, play osu, listen to music, read
      philosophy, and, if i have free time, play osu!
    </p>
    <div className={styles.buttons}>
      <IconButton
        className={styles.ib}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ptwu"
        aria-label="GitHub"
      >
        <GitHubIcon color="secondary" className={styles.gh} />
      </IconButton>
    </div>
  </div>
);
