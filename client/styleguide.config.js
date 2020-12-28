const path = require('path')

module.exports = {
  components: [
    'src/app/**/[A-Z]*.js',
    'src/artist/**/[A-Z]*.js',
    'src/saved/**/[A-Z]*.js',
  ],
  ignore: [
    '**/App.js',
    '**/**/use**.js',
    '**/styles/GlobalStyle.js',
    '**/**/**/*.test.js',
    '**/login/LoginPage.js',
    '**/artist/ArtistPage.js',
    '**/saved/SavedSongPage.js',
    '**/app/Icons/Icons.js',
    '**/app/Logos/Logos.js',
  ],
  defaultExample: false,
  exampleMode: 'expand',
  usageMode: 'expand',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
  },
}
