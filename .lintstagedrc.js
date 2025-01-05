module.exports = {
  '*.{ts,tsx}': ['eslint --quiet --fix'],
  '*.{js,jsx}': ['prettier --write'],
  '*.{json,md}': ['prettier --write'],
};
