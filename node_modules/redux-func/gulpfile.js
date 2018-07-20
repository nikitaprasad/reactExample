var gulp = require('gulp');
var registerTasks = require('gulp-predefined-tasks');

var options = {
  type: 'lib',
  srcDir: './src/',
  webpack: {
    config: {
      entry: {
        index: './src/index'
      }
    },
    watchConfig: {
      entry: {
        index: './example/index'
      }
    },
    devServer: {
      historyApiFallback: true,
      contentBase: [
        './example',
        './src',
        './node_modules',
      ],
    }
  }
};
registerTasks(gulp, options);
