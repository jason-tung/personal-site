import React from "react";
import Typography from "@material-ui/core/Typography";
import me from "../../assets/smile.jpg";
import styles from "./index.module.css";

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
      here's a picture of me! i always try to write something interesting about them: this one is me at a garden :)
    </Typography>
  </div>
);
