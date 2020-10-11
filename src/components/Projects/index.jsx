import React from 'react'
import {Typography} from '@material-ui/core'
import styles from './index.module.css'
import ProjectCard from '../ProjectCard'
import Anchor from '../Anchor'

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
import shef1 from '../../assets/shef1.png'
import shef2 from '../../assets/shef2.png'


export default () => {
      const samwise = {title: "Samwise", link: "https://github.com/cornell-dti/samwise/", image: samwise1, image2: samwise2}
      const website = {title: "Personal Site", link: "https://github.com/jason-tung/personal-site", image: website1, image2: website2}
      const gpstuy = {title: "GPStuy", link: "https://github.com/jason-tung/GPStuy", image: gpstuy1, image2: gpstuy2}
      const mieses = {title: "miesesOpening", link: "https://github.com/jason-tung/miesesOpening", image: mieses1, image2: mieses2}
      const shef = {title: "Shef", link: "https://github.com/helenxuyang/dti_hackathon_2020", image: shef1, image2: shef2}
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
                  Samwise is a planner which enables students to schedule tasks while also featuring integrations that import important deadlines and dates such as homework or exams. Right now, we are working on implementing group tasks to enable better communication and synchronization between students. Built with React, Firebase, and Typescript. 
                  </ProjectCard>{/* samwise */}
                  <ProjectCard {...shef}>
                  Shef is a recipe app aimed at busy students who can't find the time to make a Michelin star meal but also doesn't have the dough to order Doordash every day! Shef is a mobile app that encourages its users to make simple meals (typically &lt;3 ingredients (yes that is intentional and yes I just nested parentheses!)), share their simple recipes with others, and make posts related to anything food related that their hearts desire ～(^з^)-♡ This project won DTI's Internal Hackathon, by the way!! Built with Flutter and CSS.
                  </ProjectCard>
                  
            </div>
            <div className = {styles.pjdiv}>
                  {/* this website */}
                  <ProjectCard {...website}>
                  This website! I've been meaning to get around to building a website for two to three years now, and it's finally here! For the entirety of those several years, my domain just hosted a plain text file with the words "under construction..." and my resume html file in some subdirectory. This wasn't the most technically challenging, but it was a lot of fun! Built with React, JS, CSS, and lots of love :) 
                  </ProjectCard>
                  {/* gpstuy */}
                  <ProjectCard {...gpstuy}>
                  My highschool was 10 floors high and each floor had something like 30-40 rooms, which meant every September, the halls were mobbed by confused freshmen on the verge of tears because they were about to be 2 minutes late to their gym class. 
                  To remedy this great tragedy, team GPStuy came up with... GPStuy! It's like GPS... but for Stuy!! GPStuy's primary feature was a pathfinding algo which found the shortest path between two rooms, but also had other wacky features like storing classes to easily load into the path search and reporting the current bell period. Built with Flask, Jinja, and sqlite.
                  </ProjectCard>
            </div>
            <div className = {styles.pjdiv}>
                  
                  {/* mieses */}
                  <ProjectCard {...mieses}>
                  miesesOpening was a class project for the data visualization unit of my high school software development class. This webapp plotted stat distributions of pokemon categories and featured and inverse search function where pokemon were filtered by stat ranges and type. This was built using pymongo, flask, jinja, bootstrap, and D3.
                  </ProjectCard>
                  {/* mnist */}
                  <ProjectCard {...mnist}>
                  This project recreated a very popular neural net model that reads handwritten numbers using data from the MNIST database. It was written entirely from scratch in Java (bar the standard library) and came with a GUI to handdraw and test the neural net against your own handdrawn numbers rather than artificial training data. Built with Java and Processing.
                  </ProjectCard>
            </div>
            </div>
      );
}