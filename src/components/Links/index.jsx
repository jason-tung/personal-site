import React, {useState} from 'react'
import res from '../../assets/resume.pdf';
import {Button} from '@material-ui/core'
import styles from './index.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AttachmentIcon from '@material-ui/icons/Attachment';
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
    GitHub &nbsp; <GitHubIcon />
    </CoolButton>
  </a>
  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jason-tung/"><CoolButton  >
    LinkedIn &nbsp; <LinkedInIcon />
    </CoolButton></a>
  <a target="_blank" rel="noopener noreferrer" href={res}><CoolButton  >
    Resume &nbsp; <AttachmentIcon />
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
        Hover this thing for my email!
    </Button>
    }
  </div>
</div>
}