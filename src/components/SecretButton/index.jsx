import React, {useState, useRef} from 'react';
import styles from './index.module.css'
import {Button} from '@material-ui/core'




export default () => {
  const clicksRef = useRef(0);
  const [displaySecret, setDisplaySecret] = useState(window.localStorage.getItem("jasonSecretRevealed"))
  const [message, setMessage] = useState("Secret Button (do not click!!!!)")

  // console.log(displaySecret, window.localStorage.getItem("jasonSecretRevealed"), clicksRef)

  const handleClick = () => {
    clicksRef.current = clicksRef.current + 1;
    let clicks = clicksRef.current;
    if (clicks > 12){
      window.localStorage.setItem("jasonSecretRevealed", "true");
      setDisplaySecret("true");
      alert("look what you did... you broke the button...")
    }
    else if (clicks > 8){
      setMessage("STOP!!!")
    }
    else if (clicks > 4){
      setMessage("stop!!!")
    }
    else if (clicks > 0){
      setMessage("no really!! stop clicking!!!")
    }
    // console.log(clicks)
  }

  const CoolButton = ({children}) => 
  <Button variant = "outlined" 
  color = "primary" 
  className = {styles.but}
  onClick = {handleClick}>
  {children}
  </Button>

  
  return <div className={styles.contain}>
    {displaySecret === "true" ? <a href = "/secret" className={styles.secret}> What's this? A secret link? </a> : <Button variant = "outlined" 
color = "primary" 
className = {`${styles.but} ${styles.secretBut}`}
onClick = {handleClick}>
  {message}
</Button>}
    </div>
}