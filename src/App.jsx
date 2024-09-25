import React, { useState, useEffect } from "react";
import Loading from './components/Loading';
import FlagList from './components/FlagList';

export default function App() {
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/617072"
    )
      .then((result) => {
        return result.text();
      })
      .then((text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const docText = doc.querySelector("body").innerText;
        setFlag(docText);
      })
      .catch((error) => console.log("Failed to fetch data: " + error));
  }),
    [];
  
  return typeof(flag)!='string' ? <Loading /> : (
    <div className="App">
      <h1>Eric Sorum Captured the Flag:</h1>
      <FlagList flag={flag}/>
    </div>
  );
}
