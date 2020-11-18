const path = require('path')

module.exports = {
  ignore: ['**/App.js', '**/*.test.js', '**/styles/GlobalStyle.js'],
  defaultExample: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
  },
}
