import { useState, useEffect } from "react";
import Layout from "./ui/Layout";
// import "./App.css";
// import Layout from "./ui/Layout";

const initArray = ["Yellow", "Green", "Red", "Blue"];

const App = () => {
  const [seqArray, setSeqArray] = useState([]);
  const [userArray, setUserArray] = useState([]);
  const [wrong, setWrong] = useState(false);
  const [count, setCount] = useState(0);
  // const [timeleft, setTimeleft] = useState(1);
  const [started, setStarted] = useState(false);
  const [classN, setClassN] = useState("");
  const [classInput, setClassInput] = useState("");
  const [isMuted, setIsMuted] = useState(false);
  const [level, setLevel] = useState(0);
  const [highscore, setHighscore] = useState(0);
  // useEffect(() => {
  //   started === true &&
  //     timeleft > 0 &&
  //     setTimeout(() => setTimeleft(timeleft - 1), 1000);
  // }, [started, timeleft]);

  const handleClick = (e) => {
    if (e.target.value === "Stop") {
      setSeqArray([]);
      setStarted(false);
      // setTimeleft(3);
      setWrong(false);
    } else {
      setTimeout(() => handleSeq(), 1000);
      setStarted(true);
      setWrong(false);
    }
  };

  const handleSeq = () => {
    let genNum = Math.floor(Math.random() * 4);
    setSeqArray([...seqArray, initArray[genNum]]);
    setLevel(level + 1);
    setUserArray([]);
    setCount(0);
  };

  const handleUserInput = (e) => {
    if (!started) return;
    if (!wrong) {
      if (seqArray[count] === e.target.value) {
        setUserArray([...userArray, e.target.value]);
        setCount(count + 1);
        count + 1 >= seqArray.length && setTimeout(() => handleSeq(), 500);
        updateClassInput();
        // sound effect onclick
        if (!isMuted) {
          let audio = new Audio(`/sounds/${e.target.value}.mp3`);
          audio.play();
        }
      } else {
        console.log("Wrong!!!");
        console.log(`Should be ${seqArray[count]}`);
        setWrong(true);
        level > highscore && setHighscore(level);
        setLevel(0);
        // sound effect onclick
        if (!isMuted) {
          let audio = new Audio(`/sounds/error.mp3`);
          audio.play();
        }
      }
    }
  };

  const updateClassInput = () => {
    let cc = `highlight2`;
    setClassInput(cc);
    setTimeout(() => setClassInput(""), 500);
  };

  const updateClass = () => {
    let cc = `${classN} highlight`;
    setClassN(cc);
    setTimeout(() => setClassN(""), 500);
  };

  useEffect(() => {
    if (seqArray.length !== 0 && !wrong) {
      updateClass();

      // sound effect
      if (!isMuted) {
        let audio = new Audio(`/sounds/${seqArray[seqArray.length - 1]}.mp3`);
        audio.play();
      }
    }
  }, [seqArray]);
  return (
    <Layout />
    // <div className="App">
    //   {/* {timeleft === 0 ? `Level: ${level}` : `Game Start in ${timeleft}`} */}
    //   High Score: {highscore}
    //   <br />
    //   Initial Array = {initArray}
    //   <br />
    //   Sequence Array = {seqArray} <br />
    //   User Array = {userArray} <br />
    //   <button onClick={handleClick} value={started ? "Stop" : "Start"}>
    //     {started ? "Stop" : "Start"}
    //   </button>
    //   <button onClick={() => setIsMuted(!isMuted)}>
    //     {isMuted ? "Unmute" : "Mute"}
    //   </button>
    //   <br />
    //   {initArray.map((color) => {
    //     return (
    //       <button
    //         className={`element ${
    //           color === seqArray[seqArray.length - 1] ? classN : ""
    //         } ${color === userArray[userArray.length - 1] && classInput}`}
    //         key={color}
    //         onClick={handleUserInput}
    //         value={color}
    //       >
    //         {color}
    //       </button>
    //     );
    //   })}
    // </div>
  );
};

export default App;
