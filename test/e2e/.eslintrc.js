module.exports = {
  plugins: ['cypress'],
  env: {
    mocha: true,
    'cypress/globals': true,
  },
  extends: ['plugin:cypress/recommended'],
  rules: {
    strict: 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
