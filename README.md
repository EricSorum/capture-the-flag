# Here is a draft of the working code for the React App.js:

import "./styles.css";

const flag = "apricot";
const flagEl = document.getElementById("flag");

export default function App() {
  return (
    <div className="App">
      <h1>Eric Sorum Captured the Flag:</h1>

      <ul>
        {flag.split("").map((letter) => (
          <li key={letter}>{letter}</li>
        ))}
      </ul>
    </div>
  );
}



# Here is the code for retrieving the URL:

let urlString = '';
const codeElements = document.querySelectorAll('code');
codeElements.forEach((e) => findChar(e));
function findChar(codeEl) {
  if (codeEl.tagName === 'CODE' && codeEl.dataset.class.slice(0, 2) === '23') {
    const divEl = codeEl.querySelector('div');
    const divData = divEl.dataset.tag;
    if (divEl.tagName === 'DIV' && divData.slice(divData.length-2, divData.length) === '93') {
      const spanEl = divEl.querySelector('span');
      const spanData = spanEl.dataset.id;
      if (spanEl.tagName === 'SPAN' && spanData.includes('21')) {
        const iEl = spanEl.querySelector('i');
        const character = iEl.getAttribute('value');
        if (iEl.tagName === 'I' && character) {
          urlString = urlString + character;
        }
      }
    }
  }
}
console.log(urlString);

The resulting url is:
https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/617072

The flag on that page is:
apricot