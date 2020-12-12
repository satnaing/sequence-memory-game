import { useState, useEffect } from "react";
import Button from "./Button";
import ColorDiv from "./ColorDiv";
import ContainerRow from "./ContainerRow";
import RoundedButton from "./RoundedButton";
import "../App.css";
import MuteSVG from "./MuteSVG";
import UnmuteSVG from "./UnmuteSVG";

const initArray = ["yellow", "red", "blue", "white"];

const Layout = () => {
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

  const handleClick = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Stop") {
      setSeqArray([]);
      setStarted(false);
      // setTimeleft(3);
      setWrong(false);
      setLevel(0);
    } else {
      setTimeout(() => handleSeq(), 1000);
      setStarted(true);
      setWrong(false);
      setLevel(0);
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
      const clickedDiv = e.target.attributes.value.value;
      if (seqArray[count] === clickedDiv) {
        setUserArray([...userArray, clickedDiv]);
        setCount(count + 1);
        count + 1 >= seqArray.length && setTimeout(() => handleSeq(), 1000);
        updateClassInput();
        // sound effect onclick
        if (!isMuted) {
          let audio = new Audio(`/sounds/${clickedDiv}.mp3`);
          audio.play();
        }
      } else {
        console.log("Wrong!!!");
        console.log(`Should be ${seqArray[count]}`);
        setWrong(true);
        level > highscore && setHighscore(level);
        // sound effect onclick
        if (!isMuted) {
          let audio = new Audio(`/sounds/error.mp3`);
          audio.play();
        }
      }
    }
  };

  useEffect(() => {
    if (seqArray.length !== 0 && !wrong) {
      updateClass();

      // sound effect
      if (!isMuted) {
        console.log(seqArray[seqArray.length - 1]);
        let audio = new Audio(`/sounds/${seqArray[seqArray.length - 1]}.mp3`);
        audio.play();
      }
    }
  }, [seqArray]);

  const updateClassInput = () => {
    let cc = `border-opacity-100 bg-opacity-50`;
    setClassInput(cc);
    setTimeout(() => setClassInput(""), 100);
  };

  const updateClass = () => {
    let cc = `${classN} border-opacity-100 bg-opacity-10`;
    setClassN(cc);
    setTimeout(() => setClassN(""), 100);
  };

  let headMsg = "";
  if (!started) {
    headMsg = "Press Any Key to Start";
  } else {
    if (wrong) {
      headMsg = `Game Over!!! Your score is ${level}`;
    } else {
      headMsg = `Level : ${level}`;
    }
  }

  let btnMsg = "";
  if (started) {
    if (wrong) {
      btnMsg = "Restart";
    } else {
      btnMsg = "Stop";
    }
  } else {
    btnMsg = "Start";
  }
  return (
    <div
      className={`mx-auto flex flex-col h-screen ${
        wrong ? "bg-bgcolor2" : "bg-bgcolor"
      }`}
    >
      {/* Header */}
      <ContainerRow>
        <h1 className="text-secondary font-gugi text-2xl sm:text-4xl mt-10">
          {/* {!started ? "Press Any Key to Start" : `Level : ${level}`} */}
          {headMsg}
        </h1>
      </ContainerRow>

      {/* Button */}
      <ContainerRow cname="my-8">
        <ContainerRow cname="relative w-72">
          <Button
            cname="sm:w-24 sm:h-7 sm:text-lg"
            handleClick={handleClick}
            val={started ? "Stop" : "Start"}
          >
            {/* {started ? "Stop" : "Start"} */}
            {btnMsg}
          </Button>
          {/* <button onClick={handleClick} value={started ? "Stop" : "Start"}>
            {started ? "Stop" : "Start"}
          </button> */}
          <RoundedButton handleClick={() => setIsMuted(!isMuted)}>
            {isMuted ? <>{MuteSVG}</> : <span>{UnmuteSVG}</span>}
          </RoundedButton>
        </ContainerRow>
      </ContainerRow>

      {/* Up Row */}
      <ContainerRow>
        <ContainerRow cname="flex-wrap xs:w-4/5 sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-2/5">
          {initArray.map((color) => {
            return (
              <ColorDiv
                cname={`element ${
                  color === seqArray[seqArray.length - 1] ? classN : ""
                } ${
                  color === userArray[userArray.length - 1] && classInput
                } bg-${color}`}
                key={color}
                handleUserInput={handleUserInput}
                val={color}
              />
            );
          })}
        </ContainerRow>
      </ContainerRow>

      {/* High Score */}
      <ContainerRow cname="mt-5">
        <div className="text-secondary text-lg">
          High Score: Level {highscore}
        </div>
      </ContainerRow>

      {/* Mute Btn for Mobile */}
      <ContainerRow cname="my-8">
        <Button
          cname="sm:invisible"
          handleClick={() => setIsMuted(!isMuted)}
          val=""
        >
          {isMuted ? <>Unmute {UnmuteSVG}</> : <>Mute {MuteSVG}</>}
          {/* Mute{" "} */}
        </Button>
      </ContainerRow>
    </div>
  );
};

export default Layout;
