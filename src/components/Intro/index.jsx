import React from "react";
import Typography from "@material-ui/core/Typography";
import me from "../../assets/smile.png";
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
      here's a picture of me! normally I would write something about it but
      there's nothing interesting to write.
    </Typography>
  </div>
);
