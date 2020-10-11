import React from 'react'
import {Typography} from '@material-ui/core'
import styles from './index.module.css'

export default () => <div className = {styles.contain}>
      <Typography variant="h4" align="left" >Who am I?</Typography>
      <Typography variant ="body1" aligh = "left" className = {styles.aboutme}>
I am many things... but above all, I am THE Jason Tung... 
      </Typography>
      <Typography variant ="body1" aligh = "left" className = {styles.aboutme}>
      I'm a second year CS student at Cornell University who has a passion for web development and problem solving. 
      Beyond academics, I fiddle with breadboards, read philosophy, listen to music (a lot!!), and contribute to FOSS!
      Feel free to email me or message me on social media if you want to talk about any of the above, especially existentialism, free will, identity, and normative ethics!
      </Typography>
      <Typography variant ="body1" aligh = "left" className = {styles.aboutme}>
      As a person (this should be the important bit!), I would describe myself (and hopefully others would describe me as such too!!!) as someone who is playful and funny whenever I can be. 
      Maybe I should've picked a photo of myself where I'm smiling... but hey please believe me; I'm not lying!!!
      </Typography>
      <Typography variant ="body2" aligh = "left" className = {styles.aboutme}>
      No, really, I'm not!!!
      </Typography>
</div>