const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile('./data/breeds.json', 'utf8', (err, data) => {
    if (err) {
      callback(undefined);
      return;
    }

    const breeds = JSON.parse(data);
    const desc = breeds[breed]; 
    callback(desc);
  });
};

module.exports = breedDetailsFromFile;