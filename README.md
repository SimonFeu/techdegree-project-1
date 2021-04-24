# A Random Quote Generator
## Techdegree Project 1

Live Version:  https://simonfeu.github.io/techdegree-project-1/

![image](https://user-images.githubusercontent.com/63255333/115659479-e6c47f00-a33a-11eb-96d7-5b8b94ec35f3.png)

## About the Project
This project uses basic JavaScript syntax and data structures by building a Random Quote Generator. The app displays random famous quotes each time a button is clicked. 

## Code example

### getRandomQuote function
* Declaration of the `getRandomQuote` function.
 * randomNum stores a random Number from 0 to maixmal index value.
 * radomNum is used as index to access and return a random object out of the array quotes.
 
```javascript
getRandomQuote = () => {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
};
```
### printQuote function
* Declaration of the `printQuote` function
 * First the random object is stored in a variable named 'quoteObj'.
 * Then a html-string gets created. The html-sting contains at least the quote and the source.
 * If the random object contains the properties 'citation' and 'year', then these values are also part of the string.
 * At the end the html string is inserted into the div-tag with the class 'quote-box'.

```javascript
printQuote = () => {
  let quoteObj = getRandomQuote();
  let html = `<p class="quote">${quoteObj.quote}</p>`;
  html += `<p class="source">${quoteObj.source}`;
  if (quoteObj.citation != null) {
    html += `<span class="citation">${quoteObj.citation}</span>`;
  }
  if (quoteObj.year != null) {
    html += `<span class="year">${quoteObj.year}</span>`;
  }
  html += `</p>`;
  document.getElementById("quote-box").innerHTML = html;
};
```
