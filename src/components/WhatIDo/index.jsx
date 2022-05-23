import React from "react";
import { Typography } from "@material-ui/core";
import Anchor from "../Anchor";
import styles from "./index.module.css";

export default () => (
  <div className={styles.contain}>
    <Typography variant="h4" align="left">
      What have I done?
    </Typography>
    <Typography variant="body1" aligh="left" className={styles.aboutme}>
      Let's start with what I've done in the past first! Starting in high
      school, I had a strong passion for helping others through my knowledge—I
      acted as a mentor for various programs such as Stuyvesant's SHIP (formerly
      CStuy), the CS Dojo, and a bit of private tutoring upon request. App-wise,
      I did some class projects, some of which are listed under my projects
      section, and worked on the{" "}
      <Anchor link="https://www.stuyspec.com/">
        school newspaper's website
      </Anchor>{" "}
      and{" "}
      <Anchor link="https://www.stuyactivities.org/">
        student union club management website
      </Anchor>
      .
    </Typography>
    <Typography variant="body1" aligh="left" className={styles.aboutme}>
      Going into Cornell, I joined{" "}
      <Anchor link="https://www.cornelldti.org/">Cornell DTI</Anchor>, which
      emphasizes writing code for greater social impact and served as a TA (now
      course instructor) for{" "}
      <Anchor link="https://webdev.cornelldti.org/">
        INFO 1998 - Trends in Web Development
      </Anchor>
      . I've worked on a bunch of cool projects for classes, too, but I'm
      unfortunately not allowed to disclose the source code as per Cornell's
      academic integrity policy. I am, however, happy to show you some
      screenshots and possibly demo if you are interested!
    </Typography>
    <Typography variant="body1" aligh="left" className={styles.aboutme}>
      For my freshman year summer, I interned at{" "}
      <Anchor link="https://www.enroute.digital/"> Enroute </Anchor>, where I
      did fullstack web development. In the following summer, I interned at
      Google, where I will be returning for my junior year summer.
    </Typography>
  </div>
);
