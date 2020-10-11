import React from 'react'
import {Typography} from '@material-ui/core'
import styles from './photoexpander.module.css';

export default ({title, image, children}) => {
  return <div className= {styles.wrap}> 
    <div className = {styles.card} 

    >
      <Typography variant = "h5" className = {styles.title}>
        {title}
      </Typography>
      <div className={styles.imgdiv}>
        <div className = {styles.innerimgdiv}>
      <img src = {image} alt = {`${title}`} className = {styles.pic}/>
      </div>
      </div>
      <Typography variant = "body2" className = {styles.body}>
        {children}
      </Typography>
    </div>
  </div>
}