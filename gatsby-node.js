const createPages = require('./gatsby/createPages');
const onCreatePage = require('./gatsby/onCreatePage');
const onCreateNode = require('./gatsby/onCreateNode');

exports.createPages = createPages.default;

exports.onCreatePage = onCreatePage.default;

exports.onCreateNode = onCreateNode.default;

/**
 * There was a warning:
 * `warn chunk commons [mini-css-extract-plugin] Conflicting order.`
 * Eevrything worked regardless, but I wanted to remove it.
 * The solution was to pass `ignoreOrder = true` to MiniCssExtractPlugin
 * @source https://stackoverflow.com/a/63128321/3393202
 */
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};
