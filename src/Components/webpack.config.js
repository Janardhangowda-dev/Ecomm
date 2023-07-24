const path = require('path');

module.exports = {
  // ... your other Webpack configuration options ...

  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify")
    }
  }
};
