module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true
  },
  "rules": {
    "no-console": "off",
    "max-len": "off",
    "prefer-destructuring": "off",
    "func-names": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}]
  },
  "parser": "babel-eslint"
};