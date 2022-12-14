// const moment = require('moment');

let generateMessage = (from, text) => {
  return {
    from,
    text,
    // createdAt: moment().valueOf()
    createdAt: new Date().getTime(),
  };
};

let generateLocationMessage = (from, lat, lng) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${lat}, ${lng}`,
    // createdAt: moment().valueOf(),
    createdAt: new Date().getTime(),
  };
};

// , generateLocationMessage
module.exports = { generateMessage, generateLocationMessage };
