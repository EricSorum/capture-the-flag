# Capture the Flag!

This React.js application successfully completes a hacker challenge by capturing a "flag" on the internet.  The instructions for the challenge are below.  The code for completing steps 1-2 is at the bottom of this page, and commented in App.jsx.  This React App satisfies the requirements for step 3-5 when put into a CodeSandbox.  The page returns the flag, "apricot," one letter at a time in a list, as required for the challenge.

Update: the hacker challenge has expired, and instead returns "Cannot GET /617072"

## Instructions for Capture the Flag

1. Open this [link](https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge)
2. Find a hidden URL within the HTML
   - Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.
   - The asterisk **(\*)** is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result and should be ignored.
   - There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.
   - Any additional attribute that doesn't interfere with the described pattern can be safely ignored.

Pattern of the DOM tree for each valid character of the URL

```html
<code data-class="23*">
  <div data-tag="*93">
    <span data-id="*21*">
      <i class="char" value="VALID_CHARACTER"></i>
    </span>
  </div>
</code>
```

(_To validate this step, you should be able to open the URL and get an English word. This means you have captured the flag!_ 🥳)

3. Create a CodeSandbox React application
4. Make an HTTP request to URL obtained in step 2 to load the flag into a React component
   - Don't use any external libraries. Use browser APIs
   - Render a "Loading..." text while the request is ongoing
5. Render the flag you loaded in step 4 with the following conditions:
   - Simulate a typewriter effect with a half second delay between each character. _Start showing nothing and then display characters one by one until the full string is displayed._
   - No style required
   - Render the flag a list, where each character is a list item
   - Animation should trigger after you load the flag
   - Animation should run only once
   - Use React APIs only. Don't use CSS or external libraries

Bonus: Add as a comment the script you used to to get the URL in step 2

No CSS or external modules were allowed.


## Here is the code for retrieving the URL in step 2:

let urlString = '';

const codeElements = document.querySelectorAll('code');

codeElements.forEach((codeEl) => {
  if (codeEl.tagName !== 'CODE' || !codeEl.dataset.class.startsWith('23')) {
    return; // Skip this element if not a matching code element
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