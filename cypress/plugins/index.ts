import * as webpackConfig from './cy-ts-preprocessor';
import { addMatchImageSnapshotPlugin } from 'cypress-image-snapshot/plugin';

const { startDevServer } = require('@cypress/webpack-dev-server');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  on('dev-server:start', (options) => {
    return startDevServer({ options, webpackConfig });
  });
  require('@cypress/code-coverage/task')(on, config);
  return config;
};
