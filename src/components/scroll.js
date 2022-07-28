import React from "react";
import classes from "./scroll.module.css";
import Scrollelement from "./scrollelement";
// import { useState } from "react";
// import {nanoid}from 'nanoid'

const Scroll = ({data}) => {
  // const [each, seteach] = useState([
  //   {
  //     id: nanoid(),
  //     place: "Noida",
  //     date: "21/07/2002",
  //     text:"What a day!!I am in love with this place.Travelling with friends is an absolute fun.."
  //   },
  //   {
  //     id: nanoid(),
  //     place: "Noida",
  //     date: "21/07/2002",
  //     text:"maza aagyaa yrrr"
  //   },
  //   {
  //     id: nanoid(),
  //     place: "Noida",
  //     date: "21/07/2002",
  //     text:"maza aagyaa yrrr"
  //   },
  //   {
  //     id: nanoid(),
  //     place: "Noida",
  //     date: "21/07/2002",
  //     text:"maza aagyaa yrrr"
  //   }
  // ]);

  return (
    <div className={classes.scroll}>
      {data.map((each)=>(
      <Scrollelement place={each.place} date={each.date} text={each.text}/>
      ))}

      
    </div>
  );
};

export default Scroll;
