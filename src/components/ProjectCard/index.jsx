import React, {useRef} from 'react'
import {Typography} from '@material-ui/core'
import styles from './index.module.css';

export default ({title, link, image, image2, children}) => {
  const img2 = useRef();
  return <a href={link} target="_blank" rel="noopener noreferrer">
    <div className = {styles.card} 
    onMouseEnter={() => {img2.current.style.opacity = 1}}
    onMouseLeave={() => {img2.current.style.opacity = 0}}

    >
      <Typography variant = "h5" className = {styles.title}>
        {title}
      </Typography>
      <div className={styles.imgdiv}>
        <div className = {styles.innerimgdiv}>
      <img src = {image2} ref = {img2} alt = {`${title} gui`} className = {`${styles.pic2} ${styles.pic}`}/>
      <img src = {image} alt = {`${title} gui`} className = {styles.pic}/>
      </div>
      </div>
      <Typography variant = "body2" className = {styles.body}>
        {children}
      </Typography>
    </div>
  </a>
}