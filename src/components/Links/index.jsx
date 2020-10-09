import React from 'react'
import res from '../../assets/resume.pdf';
import {Button} from '@material-ui/core'
import styles from './index.module.css'

const CoolButton = ({children}) =>
  <Button variant = "outlined" color = "primary" className = {styles.but}>
    {children}
  </Button>


export default () => <div className = {styles.butdiv}>
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