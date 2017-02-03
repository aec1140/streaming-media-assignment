const fs = require('fs'); // pull in the file system module

const page1 = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getPage = (request, response, file) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(file);
  response.end();
};

const getPage1 = (request, response) => {
  getPage(request, response, page1);
};

const getPage2 = (request, response) => {
  getPage(request, response, page2);
};

const getPage3 = (request, response) => {
  getPage(request, response, page3);
};

module.exports.getPage1 = getPage1;
module.exports.getPage2 = getPage2;
module.exports.getPage3 = getPage3;
