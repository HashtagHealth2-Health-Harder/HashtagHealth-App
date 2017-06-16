module.exports = {
  "env": {
    "browser": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended", "plugin:react/recommended", "airbnb-base"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
  },
  "plugins": [
    "react"
  ],
  "rules": {
    'class-methods-use-this': 0,
    "no-unused-vars": 0,
    "comma-dangle": 0,
    "no-trailing-spaces": 0,
    "eol-last": 0,
  }
}