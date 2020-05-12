/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
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

console.log(quotes);

/***
 * `getRandomQuote` function
 ***/

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
