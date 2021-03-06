module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-use-before-define": "off",
    "no-alert": "off",
    "no-mixed-operators": "off",
    "no-param-reassign": "off",
    "no-return-assign": "off",
    "no-loop-func":"off",
    "no-restricted-globals":"off"
  },
};