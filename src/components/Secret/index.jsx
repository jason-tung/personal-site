import React from 'react';
import {Typography} from '@material-ui/core'
import PhotoExpander from './PhotoExpander'
import styles from './index.module.css'

import jason30 from '../../assets/me/jason30.jpg';  
import jasonbball from '../../assets/me/jasonbball.jpg';  
import jasonbox from '../../assets/me/jasonbox.jpg';  
import jasondab from '../../assets/me/jasondab.jpg';  
import jasondeer from '../../assets/me/jasondeer.png';  
import jasonperm from '../../assets/me/jasonperm.jpg';  
import jasonsleep from '../../assets/me/jasonsleep.png';  
import jasonwacky from '../../assets/me/jasonwacky.png';

export default () => {
  const jason30Obj = {title: "MIT Splash 2015 Jason", image: jason30}
  const jasonbballObj = {title: "Basketball Head Jason", image: jasonbball}
  const jasonboxObj = {title: "Sitting-In-A-Box Jason", image: jasonbox}
  const jasondabObj = {title: "Dabbing Jason", image: jasondab}
  const jasondeerObj = {title: "Reindeer for PJ Day Jason", image: jasondeer}
  const jasonpermObj = {title: "Permed Hair Jason", image: jasonperm}
  const jasonsleepObj = {title: "Sleep Deprived Jason", image: jasonsleep}
  const jasonwackyObj = {title: "Feeling Wacky Jason", image: jasonwacky}
  return <div className = {styles.main}>
  <div className = {styles.cont}>
    <div className = {styles.head}>
    <Typography variant = "h4" > The Not Very Secret Page! </Typography>
    </div>
    <div className = {styles.body}>
    <Typography variant = "body1" aligh = "left" className = {styles.bodytexttop}> 
    Thank you, valued reader, for taking the effort to read all of my site! 
    </Typography>
    <Typography variant = "body1" aligh = "left" className = {styles.bodytext}> 
    As a token of my appreciation, here are some silly photos of myself over the years :).  I don't take many pictures of myself, so if you have pictures of me, please send them to me!! <b>This section is a <u>BIG</u> WIP: </b>Maybe I'll do something cool with this section later on.. who knows!!!
    </Typography>
    <div className = {styles.pjdiv}>
                  <PhotoExpander {...jasonboxObj}><i>Winter 2014 - </i>me sitting in a box bein all weird when i was supposed to be discussing some chapter of to kill a mockingbird that i never read lol</PhotoExpander>
                  <PhotoExpander {...jason30Obj}><i>Summer 2015 - </i>me in the red on the far left of course; was a ton of fun hanging with friends that summer :)</PhotoExpander>
                  <PhotoExpander {...jasondabObj}><i>Summer 2015 - </i>me inventing the dab at mit splash 2015</PhotoExpander>
                  <PhotoExpander {...jasonbballObj}><i>Spring 2015 - </i>me with a basketball on my head sometime in 8th grade because my friend said he would gift me CSGO 2 crate keys lol</PhotoExpander>
                  <PhotoExpander {...jasonwackyObj}><i>July 22, 2017 - </i>me feeling wacky or something... not really sure how this photo happened...</PhotoExpander>
                  <PhotoExpander {...jasonsleepObj}><i>November 18, 2017 - </i>me sleeping on my way to pclassic winter 2017</PhotoExpander>
                  <PhotoExpander {...jasondeerObj}><i>April 5, 2018 - </i>me wearing my reindeer onesie for pj day </PhotoExpander>
                  <PhotoExpander {...jasonpermObj}><i>September 27, 2019 - </i>me right after i got my hair permed</PhotoExpander>
    </div>
    </div>
  </div>
</div>
}