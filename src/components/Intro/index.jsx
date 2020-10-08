import React from 'react';
import Typography from '@material-ui/core/Typography';
import me from '../../assets/squareme.jpg';
import styles from './index.module.css';

export default () => (
  <div className={styles.wholeThing}>
    <Typography variant="h3">Hi, I'm Jason :)</Typography>
    <img src={me} className={styles.me} alt="me :)"></img>
    <Typography
      variant="caption"
      display="block"
      align="left"
      className={styles.cap}
    >
      here's a picture of me! apologies that it's off-center... times are tough
      in the photography department...
    </Typography>
  </div>
);
