import React from 'react'
import {Typography} from '@material-ui/core'
import styles from './index.module.css'
import ProjectCard from '../ProjectCard'

import samwise1 from '../../assets/samwise-splash.png'
import samwise2 from '../../assets/samwise-use.png'
import mieses1 from '../../assets/mieses-distr.png'
import mieses2 from '../../assets/mieses-search.png'
import gpstuy1 from '../../assets/gpstuy-use.png'
import gpstuy2 from '../../assets/gpstuy-schedule.png'
import mnist1 from '../../assets/mnist1.png'
import mnist2 from '../../assets/mnist2.png'
import deepplayer1 from '../../assets/deepplayer.png'
import website1 from '../../assets/website1.png'
import website2 from '../../assets/website2.png'


export default () => {
      const samwise = {title: "Samwise", link: "https://github.com/cornell-dti/samwise/", image: samwise1, image2: samwise2}
      const website = {title: "Personal Site", link: "https://github.com/jason-tung/personal-site", image: website1, image2: website2}
      const gpstuy = {title: "GPStuy", link: "https://github.com/jason-tung/GPStuy", image: gpstuy1, image2: gpstuy2}
      const mieses = {title: "miesesOpening", link: "https://github.com/jason-tung/miesesOpening", image: mieses1, image2: mieses2}
      const mnist = {title: "mnist", link: "https://github.com/jason-tung/mnist", image: mnist1, image2: mnist2}
      const deepplayer = {title: "DeepPlayer", link: "https://github.com/kieracawley/DeepPlayer", image: deepplayer1, image2: deepplayer1}
      return (
            <div>
            <div className = {styles.contain}>
            
                  <Typography variant="h4" align="left" >What have I made?</Typography>
                  <Typography variant ="body1" aligh = "left" className = {styles.aboutme}>
                  Select stuff that I've worked on in the past :)
                  </Typography>
            </div>
            <div className = {styles.pjdiv}>
                  {/* samwise */}
                  <ProjectCard {...samwise}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
                  </ProjectCard>
                  {/* this website */}
                  <ProjectCard {...website}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
                  </ProjectCard>
                  
            </div>
            <div className = {styles.pjdiv}>
                  {/* gpstuy */}
                  <ProjectCard {...gpstuy}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
                  </ProjectCard>
                  {/* mieses */}
                  <ProjectCard {...mieses}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
                  </ProjectCard>
            </div>
            <div className = {styles.pjdiv}>
                  {/* mnist */}
                  <ProjectCard {...mnist}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
                  </ProjectCard>
                  {/* music */}
                  <ProjectCard {...deepplayer}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi quis hendrerit dolor magna eget est lorem ipsum dolor.
                  </ProjectCard>
            </div>
            </div>
      );
}