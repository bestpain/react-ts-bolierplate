const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  // "envVars" is the argument which we can specify in package.json scripts
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
