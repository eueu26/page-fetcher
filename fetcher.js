
const request = require('request');
const fs = require('fs');
request('https://example.edu', (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log(body); // Print the HTML for the Google homepage.

  fs.writeFile('/Users/eunice/Documents/requestExample/index.html', body, err => {
    if (err) {
      console.log('err: ', err);
    }
  });
});