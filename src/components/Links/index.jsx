import React, {useState} from 'react'
import res from '../../assets/resume.pdf';
import {Button} from '@material-ui/core'
import styles from './index.module.css'

const CoolButton = ({children}) =>
  <Button variant = "outlined" color = "primary" className = {styles.but}>
    {children}
  </Button>


export default () => {
  
  const x = "68@co";
  const [show, setShow] = useState(false)
  
  return <div><div className = {styles.butdiv}>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/jason-tung/">
    <CoolButton  >
    GitHub
    </CoolButton>
  </a>
  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jason-tung/"><CoolButton  >
    LinkedIn
    </CoolButton></a>
  <a target="_blank" rel="noopener noreferrer" href={res}><CoolButton  >
    Resume
    </CoolButton></a>
</div>
<div className = {styles.bottomthing}>
  {
    show ? 
    <div className = {styles.showHold}>
      
    {
    // dont scrape my email...
    // eslint-disable-next-line no-useless-concat
    "jt5" + x + "rnell." + "edu"}
    </div>
    :
    <Button variant = "outlined" color = "primary" 
    onMouseEnter={() => {setShow(true)}}
    className = {`${styles.spec} ${styles.but}`}>
        Hover this thing for me email!
    </Button>
    }
  </div>
</div>
}