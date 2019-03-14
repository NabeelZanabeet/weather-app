module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
      'jest': true,
    },
    'rules': {
      'no-use-before-define': 'off',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'comma-dangle': 'off',
      'react/jsx-one-expression-per-line' : 'off',
      'no-undef' : 'off',
      'react/destructuring-assignment' : 'off',
      'react/prefer-stateless-function' : 'off',
      'arrow-parens' : 'off',
      'react/no-access-state-in-setstate' : 'off'
    },
    'globals': {
      "fetch": false
    }
  }