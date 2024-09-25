import React, { useState, useEffect } from "react";

export default function FlagList(props) {

  const [flag, setFlag] = useState('');
  const completeFlag = props.flag;
  // console.log(completeFlag)
  // console.log(completeFlag.slice(0, 2))
  /*
  Use state so that the component updates every 0.5 seconds when state is updated.
  And update the state by adding one letter at a time.
  */
  useEffect(() => {
    // Use setTimeout to reset the countdown after it reaches 0
    if (flag.length < completeFlag.length) {

      // I need to set a timeout inside the for loop

        for (let i = 0; i <= completeFlag.length; i++) {

          setTimeout(() => {
            setFlag(completeFlag.slice(0, i));
          }, 2000); 
        }
  
        // find the next string length the flag should be by adding one to flag.length
        // set the flag to that number of characters in completeFlag

    }
  }, [flag]); 
  return typeof(completeFlag)!='string' ? null : (
    <ul>
      {flag.split("").map((letter) => (
        <li key={letter}>{letter}</li>
      ))}
    </ul>
  );
}