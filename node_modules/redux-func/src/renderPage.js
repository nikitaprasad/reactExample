if (process.env.NODE_ENV === 'production') {
  module.exports = require('./renderPage.prod');
} else {
  module.exports = require('./renderPage.dev');
}
