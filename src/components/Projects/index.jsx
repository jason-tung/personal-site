import React from 'react'
import {Typography} from '@material-ui/core'
import styles from './index.module.css'
import samwise1 from '../../assets/samwise-splash.png'
import samwise2 from '../../assets/samwise-use.png'
import ProjectCard from '../ProjectCard'

export default () => <div className = {styles.contain}>
      <Typography variant="h4" align="left" >What have I made?</Typography>
      <Typography variant ="body1" aligh = "left" className = {styles.aboutme}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Et netus et malesuada fames ac turpis. Mi quis hendrerit dolor magna eget est lorem. Volutpat lacus laoreet non curabitur gravida arcu ac tortor.      </Typography>
      <div className = {styles.pjdiv}>
      <ProjectCard {...{title: "Samwise", link: "https://github.com/cornell-dti/samwise/", image: samwise1, image2: samwise2}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
      </ProjectCard>
      </div>
</div>