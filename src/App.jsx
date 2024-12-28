import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import FlagList from "./components/FlagList";

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
  
  return typeof(flag)!="string" ? <Loading /> : (
    <div className="App">
      <FlagList flag={flag}/>
    </div>
  );
}

/*
Here is the code for retrieving the URL in step 2:

let urlString = '';

const codeElements = document.querySelectorAll('code');

codeElements.forEach((codeEl) => {
  if (codeEl.tagName !== 'CODE' || !codeEl.dataset.class.startsWith('23')) {
    return;
  }

  const divEl = codeEl.querySelector('div[data-tag$="93"]');
  if (!divEl) {
    return;
  }

  const spanEl = divEl.querySelector('span[data-id*="21"]');
  if (!spanEl) {
    return;
  }

  const iEl = spanEl.querySelector('i');
  const character = iEl.getAttribute('value');
  if (character) {
    urlString += character;
  }
});

console.log(urlString);


The resulting url is:
https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/617072

The flag on that page is:
apricot
*/