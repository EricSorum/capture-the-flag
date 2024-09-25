import React, { useState, useEffect } from "react";

export default function FlagList(props) {

  const [flag, setFlag] = useState('');
  const completeFlag = props.flag;

   useEffect(() => {
    console.log('useEffect firing, flag: ' + flag)
    if (flag.length < completeFlag.length) {
      setTimeout(() => {
        setFlag(completeFlag.slice(0, flag.length+1))
      }, 500);
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