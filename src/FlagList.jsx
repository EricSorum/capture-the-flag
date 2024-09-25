import React, { useState, useEffect } from "react";

export default function FlagList(props) {

  const [flag, setFlag] = useState('');
  const completeFlag = props.flag;

  /*
  Use state so that the component updates every 0.5 seconds when state is updated.
  And update the state by adding one letter at a time.
  */
  useEffect(() => {
    console.log('useEffect firing, flag: ' + flag)
    // Use setTimeout to reset the countdown after it reaches 0
    if (flag.length < completeFlag.length) {

      // I need to set a timeout inside the for loop
      // maybe try another way to increment without for loop?
      setTimeout(() => {
        setFlag(flag + completeFlag.slice(flag.length, flag.length+1))
      }, 500);


        // for (let i = 0; i <= completeFlag.length; i++) {

        //   setTimeout(() => {
        //     console.log(completeFlag.slice(0, i))
        //     // setFlag(completeFlag.slice(0, i));
        //   }, 2000); 
        // }
  
        // find the next string length the flag should be by adding one to flag.length
        // set the flag to that number of characters in completeFlag

    }
  }, [flag]); 
  return (
    <ul>
      {flag.split("").map((letter) => (
        <li key={letter}>{letter}</li>
      ))}
    </ul>
  );
}