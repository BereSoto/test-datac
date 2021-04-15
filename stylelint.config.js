module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'scss/at-rule-no-unknown': null,
    'max-nesting-depth': 3,
    'scss/selector-no-redundant-nesting-selector': true,
  },
}
