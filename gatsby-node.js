const createPages = require('./gatsby/createPages');
const onCreatePage = require('./gatsby/onCreatePage');
const onCreateNode = require('./gatsby/onCreateNode');

exports.createPages = createPages.default;

exports.onCreatePage = onCreatePage.default;

exports.onCreateNode = onCreateNode.default;
