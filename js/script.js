/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * Declaration of the array of 'quotes'
 * It contains at least the properties of "quotes" and "source".
 * If "citation" and "year" are also available for the quote, these properties are also included.
 ***/
let quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon"
  },
  {
    quote:
      "Nothing can be made except by makers, nothing can be managed except by managers. Money cannot make anything and money cannot manage anything",
    source: "Henry Ford",
    citation: "Ford News",
    year: 1922
  },
  {
    quote:
      "You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new.",
    source: "Steve Jobs",
    citation:
      'Interview with Inc. Magazine for its "The Entrepreneur of the Decade Award"',
    year: 1989
  }
];

/***
 * Declaration of the `getRandomQuote` function.
 * randomNum stores a random Number from 0 to maixmal index value.
 * radomNum is used as index to access and return a random object out of the array quotes.
 ***/

getRandomQuote = () => {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
};

/***
 * Declaration of the `printQuote` function
 * First the random object is stored in a variable named 'quoteObj'.
 * Then a html-string gets created. The html-sting contains at least the quote and the source.
 * If the random object contains the properties 'citation' and 'year', then these values are also part of the string.
 * At the end the html string is inserted into the div-tag with the class 'quote-box'.
 ***/

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

/***
 * the printQuote() function is called when the Button with the id 'load-quote' is clicked.
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
