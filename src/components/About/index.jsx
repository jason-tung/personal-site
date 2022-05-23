import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./index.module.css";

export default () => (
  <div className={styles.contain}>
    <Typography variant="h4" align="left">
      Who am I?
    </Typography>
    <Typography variant="body1" aligh="left" className={styles.aboutme}>
      I'm Jason!
    </Typography>
    <Typography variant="body1" aligh="left" className={styles.aboutme}>
      I'm a junior at Cornell studying computer science. I primarily do web
      development, but more generally, I enjoy problem solving using code.
      Besides that, I enjoy following basketball and olympic lifting. I love
      going to the gym, cooking, and learning new languages in my free time!
    </Typography>
    {/* <Typography variant="body1" aligh="left" className={styles.aboutme}>
      Feel free to send me an email or message on social media to get food/coffee - I'm not
    </Typography>
    <Typography variant="body2" aligh="left" className={styles.aboutme}>
      No, really, I'm not!!!
    </Typography> */}
  </div>
);
