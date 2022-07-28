import React, { useState } from "react";
import {  FaLongArrowAltRight } from "react-icons/fa";
import classes from "./add.module.css";

import Dropzone from "./dropzone";

const Addd = ({ handleadd ,fetchdata,close}) => {
  const [textbox, settextbox] = useState(false);
  const [dropbox, setdropbox] = useState(true);
  const [addcaption, setaddcaption] = useState("");

  const opentext = () => {
    settextbox(true);
    setdropbox(false);
  };
  const handlecaptionchange = (event) => {
    setaddcaption(event.target.value);
    console.log(event.target.value);
  };
  const datee = new Date();
  const testdata = {
    testtext: addcaption,
    date: datee.toLocaleDateString(),
  };
  async function handleaddclick() {
    const response = await fetch(
      "https://don-tstop-default-rtdb.firebaseio.com/nodedata.json",
      {
        method: "POST",
        body: JSON.stringify(testdata),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const hidata = await response.json();
    console.log(hidata);
    if (addcaption.trim().length > 0) {
      handleadd(addcaption);
      setaddcaption("");
      settextbox(false)
      {close()}
      
    }
    {fetchdata()}
  }
  return (
    <>
      {dropbox && (
        <div className={classes.add}>
          Add Image
          <Dropzone />
          <FaLongArrowAltRight onClick={opentext} />
        </div>
      )}

      {textbox && (
        <div className={classes.add}>
          write a caption
          <textarea
            name="caption"
            onChange={handlecaptionchange}
            value={addcaption}
            
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={handleaddclick} className={classes.savebtn}>
            Save
          </button>
        </div>
      )}
    </>
  );
};

export default Addd;
