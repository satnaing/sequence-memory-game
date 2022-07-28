import { useState, useEffect, useCallback } from "react";
import Button from "./Button";
import ColorDiv from "./ColorDiv";
import ContainerRow from "./ContainerRow";
import RoundedButton from "./RoundedButton";
import "../App.css";
import MuteSVG from "./MuteSVG";
import UnmuteSVG from "./UnmuteSVG";
import useLocalStorage from "../customHooks/useLocalStorage";

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
  // const [highscore, setHighscore] = useState(0);
  const [highscore, setHighscore] = useLocalStorage(0, "highscore");

  const handleSeq = useCallback(() => {
    let genNum = Math.floor(Math.random() * 4);
    setSeqArray([...seqArray, initArray[genNum]]);
    setLevel((prevLvl) => prevLvl + 1);
    setUserArray([]);
    setCount(0);
  }, [seqArray, level]);

  const handleClick = useCallback(
    (e) => {
      if (e.target.value === "Stop") {
        setSeqArray([]);
        setStarted(false);
        setWrong(false);
        setLevel(0);
      } else {
        setTimeout(() => handleSeq(), 1000);
        setStarted(true);
        setWrong(false);
        setLevel(0);
      }
    },
    [handleSeq]
  );

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
          let audio = new Audio(
            `${process.env.PUBLIC_URL}/sounds/${clickedDiv}.mp3`
          );
          audio.play();
        }
      } else {
        // console.log(`Should be ${seqArray[count]}`);
        trinkleClass();
        setWrong(true);
        level > highscore && setHighscore(level);
        // sound effect onclick
        if (!isMuted) {
          let audio = new Audio(`${process.env.PUBLIC_URL}/sounds/error.mp3`);
          audio.play();
        }
      }
    }
  };

  const trinkleClass = () => {
    setTimeout(() => updateClass(), 500);
    setTimeout(() => updateClass(), 800);
    setTimeout(() => updateClass(), 1100);
  };

  const updateClass = useCallback(() => {
    let cc = `${classN} border-opacity-100 bg-opacity-10`;
    setClassN(cc);
    setTimeout(() => setClassN(""), 100);
  }, [classN]);

  useEffect(() => {
    if (seqArray.length !== 0 && !wrong) {
      updateClass();

      // sound effect
      if (!isMuted) {
        let audio = new Audio(
          `${process.env.PUBLIC_URL}/sounds/${
            seqArray[seqArray.length - 1]
          }.mp3`
        );
        audio.play();
      }
    }
    // eslint-disable-next-line
  }, [seqArray, isMuted, wrong]);

  const updateClassInput = () => {
    let cc = `border-opacity-100 bg-opacity-50`;
    setClassInput(cc);
    setTimeout(() => setClassInput(""), 100);
  };

  let headMsg = "";
  if (!started) {
    headMsg = (
      <>
        <span className="hidden sm:inline">Press Any Key to Start</span>
        <span className="sm:hidden">Tab the Button to start</span>
      </>
    );
  } else {
    if (wrong) {
      headMsg = `Game Over! Your score is ${level}`;
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

  // Start the game if any key is pressed
  useEffect(() => {
    document.addEventListener("keydown", handleClick, false);

    return () => {
      document.removeEventListener("keydown", handleClick, false);
    };
  }, [handleClick]);
  return (
    <div
      className={`mx-auto flex flex-col h-screen ${
        wrong ? "bg-bgcolor2" : "bg-bgcolor"
      }`}
    >
      {/* Header */}
      <ContainerRow>
        <h1 className="text-secondary font-gugi text-2xl sm:text-4xl mt-10">
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
            {btnMsg}
          </Button>
          <RoundedButton handleClick={() => setIsMuted(!isMuted)}>
            {isMuted ? <>{MuteSVG}</> : <span>{UnmuteSVG}</span>}
          </RoundedButton>
        </ContainerRow>
      </ContainerRow>

      {/* Up Row */}
      <ContainerRow>
        <ContainerRow cname="flex-wrap xs:w-4/5 sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-2/5">
          {initArray.map((color) => {
            let bgColor = "";
            if (color === "yellow") {
              bgColor = "bg-yellow";
            } else if (color === "red") {
              bgColor = "bg-red";
            } else if (color === "blue") {
              bgColor = "bg-blue";
            } else if (color === "white") {
              bgColor = "bg-white";
            }
            return (
              <ColorDiv
                cname={`${
                  color === seqArray[seqArray.length - 1] && !wrong
                    ? classN
                    : ""
                } ${color === seqArray[count] && wrong ? classN : ""} ${
                  color === userArray[userArray.length - 1] && classInput
                } ${bgColor}`}
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
          cname="sm:invisible mb-8"
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
