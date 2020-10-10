import React from 'react'
import {Typography} from '@material-ui/core'
import styles from './index.module.css'
import ProjectCard from '../ProjectCard'

import samwise1 from '../../assets/samwise-splash.png'
import samwise2 from '../../assets/samwise-use.png'
import mieses1 from '../../assets/mieses-distr.png'
import mieses2 from '../../assets/mieses-search.png'


export default () => {
      const samwise = {title: "Samwise", link: "https://github.com/cornell-dti/samwise/", image: samwise1, image2: samwise2}
      const mieses = {title: "miesesOpening", link: "https://github.com/KennyLi/miesesOpening", image: mieses1, image2: mieses2}
      return (
            <div>
            <div className = {styles.contain}>
            
                  <Typography variant="h4" align="left" >What have I made?</Typography>
                  <Typography variant ="body1" aligh = "left" className = {styles.aboutme}>
                  Select stuff that I've worked on in the past :)
                  </Typography>
            </div>
            <div className = {styles.pjdiv}>
                  <ProjectCard {...samwise}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
                  </ProjectCard>
                  <ProjectCard {...mieses}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
                  </ProjectCard>
            </div>
            </div>
      );
}