import React from 'react'
import classes from './what.module.css';

const What = () => {
  return (
    <div className={classes.what}>
        <div className={classes.head}>
        <h3> What this is for?</h3>
        </div>
        <div className={classes.text}>
            Here you can write and save your travel journel .
            The places you explore,
            The food you have.
            Any and every thing.

        </div>
        
        
    </div>
  )
}

export default What