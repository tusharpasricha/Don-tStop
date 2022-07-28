import React, { useState } from "react";
import classes from "./nav.module.css";
import { FaArrowAltCircleRight, FaArrowCircleRight, FaArrowCircleUp, FaRegCalendarPlus, FaRegQuestionCircle, FaRetweet } from "react-icons/fa";
import Backdrop from "./backdrop";
import What from "./what";
import Add from "./add";

const Nav = ({addnew,fetchdata}) => {
  const [backdrop, setbackdrop] = useState(false);
  const [what, setwhat] = useState(false);
  const[add,setadd]=useState(false)

  const openwhat = () => {
    setbackdrop(true);
    setwhat(true);
  };
  const openadd=()=>{
    setbackdrop(true)
    setadd(true)

  }
  const close = () => {
    setbackdrop(false);
    setwhat(false);
    setadd(false)
  };
  return (
    <>
      <div className={classes.nav}>
        <div className={classes.navlogo}>Don't Stop</div>

        <div className={classes.navadd}>
          <div onClick={openadd}>
            <FaRegCalendarPlus />
          </div>
          <div onClick={openwhat}>
            <FaRegQuestionCircle />
          </div>
          <div onClick={fetchdata}>
            <FaRetweet/>
          </div>
        </div>
      </div>

      {backdrop && <Backdrop onCancel={close} />}

      {what && <What />}
      {add && <Add handleadd={addnew} fetchdata={fetchdata} close={close}/>}
    </>
  );
};

export default Nav;
