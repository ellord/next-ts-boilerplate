module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'typescript-eslint-parser',
  plugins: ['react', 'prettier', 'typescript'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ]
  }
};
