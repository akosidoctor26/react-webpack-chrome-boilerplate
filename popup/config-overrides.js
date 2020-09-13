const { override, overrideDevServer } = require('customize-cra');
const path = require('path');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

// Refer to:
// https://github.com/timarney/react-app-rewired
// https://github.com/arackaf/customize-cra
const htmlName = process.env.REACT_APP_HTML;
module.exports = {
  webpack: override((config, env) => {
    const configEnv = process.env.REACT_APP_CONFIG_ENV || env;

    //#region PLUGINS
    // modify HtmlWebpackPlugin to use different entry .html
    config.plugins.forEach((plugin) => {
      if (plugin instanceof HtmlWebpackPlugin) {
        plugin.options.filename = htmlName;
        plugin.options.template = path.resolve(__dirname, 'public', htmlName);
      }
    });

    //#region Generate manifest.json - use NODE_ENV to point to which env
    const manifestJson = require(`../config/manifest/${configEnv}.json`);
    config.plugins.push(
      new GenerateJsonPlugin('./manifest.json', manifestJson)
    );
    //#endregion Generate manifest.json

    //#region Obfuscate
    config.plugins.push(
      new WebpackObfuscator(
        {
          rotateStringArray: true
        },
        []
      )
    );
    //#endregion Obfuscate
    //#endregion PLUGINS

    return config;
  }),
  devServer: overrideDevServer((config) => {
    // Additional config here
    return config;
  }),
  paths: function (paths, env) {
    return {
      ...paths,
      appHtml: path.resolve(paths.appPublic, htmlName),
      appBuild: path.resolve(__dirname, '..', 'dist')
    };
  }
};
