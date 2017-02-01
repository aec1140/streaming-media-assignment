const fs = require('fs'); // pull in the file system module
const path = require('path');

const getParty = (request, response) => {
  const file = path.resolve(__dirname, '../client/party.mp4');
  
  fs.stat(file, (err,stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        response.writeHead(404);
      }
      return response.end(err);
    }
    
    const range = request.headers.range;
    
    if (!range) {
      return response.writeHead(416);
    }
    
    const positions = range.replace(/bytes=/, '').split('-');
    
    let start = parseInt(positions[0], 10);
    
    const total = stats.size;
    const end = positions[1] ? parseInt(positions[1], 10) : total - 1;
    
    if (start > end) {
      start = end - 1;
    }
  });
};

module.exports.getParty = getParty;