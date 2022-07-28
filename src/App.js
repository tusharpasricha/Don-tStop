import "./App.css";
import Nav from "./components/nav";
import Scroll from "./components/scroll";
import { useState,useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  useEffect(()=>{fetchdatahandler()},[])
  async function fetchdatahandler() {
    console.log("fth");
    const response = await fetch(
      "https://don-tstop-default-rtdb.firebaseio.com/nodedata.json"
    );
    const indata = await response.json();

    console.log(indata);

    const requireddata = [];
    for (const key in indata) {
      requireddata.push({
        id: key,
        text: indata[key].testtext,
        date: indata[key].date,
      });
    }
    requireddata.reverse();
    console.log(requireddata);

    setdata(requireddata);
  }

  const [data, setdata] = useState([]);
  // window.onbeforeunload = (event) => {
  //   console.log("refreshes");
  //   const e = event || window.event;
  //   // Cancel the event
  //   e.preventDefault();
  //   if (e) {
  //     e.returnValue = ""; // Legacy method for cross browser support
  //   }
  //   return ""; // Legacy method for cross browser support
  // };
  // {fetchdatahandler()}
  const addanewitem = (caption) => {
    const date = new Date();
    const newobj = {
      id: nanoid(),
      text: caption,
      date: date.toLocaleDateString(),
    };
    const newdata = [...data, newobj];
    setdata(newdata);
    console.log(newdata);
  };
  return (
    <div className="App">
      <Nav addnew={addanewitem} fetchdata={fetchdatahandler} />
      <Scroll data={data} />
    </div>
  );
}

export default App;
