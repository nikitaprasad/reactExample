if (process.env.NODE_ENV === 'production') {
  module.exports = require('./withRedux.prod');
} else {
  module.exports = require('./withRedux.dev');
}
