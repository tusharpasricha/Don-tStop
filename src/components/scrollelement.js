import React from 'react'
import classes from './scrollelement.module.css'
import dss from './dss.jpg'

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
            <img className={classes.img} src={dss} alt="" />
        </div>
        <div className={classes.text}>
        {text}
        </div>
        
    </div>
  )
}

export default Scrollelement