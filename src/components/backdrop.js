import React from 'react';
import classes from './backdrop.module.css'


const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onCancel}>

    </div>
  )
}

export default Backdrop