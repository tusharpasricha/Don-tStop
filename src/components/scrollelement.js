import React from 'react'
import classes from './scrollelement.module.css'
import dilli from './dilli.jpg'

const Scrollelement = ({date,text}) => {
  return (
    <div className={classes.scrollelement}>
       
        <div className={classes.bar}>
            <div className={classes.profile}> 
            dilli
            </div>

            <div className={classes.day}>
               {date}
            </div>

        </div>
        <div className={classes.photo}>
            <img className={classes.img} src={dilli} alt="" />
        </div>
        <div className={classes.text}>
        {text}
        </div>
        
    </div>
  )
}

export default Scrollelement