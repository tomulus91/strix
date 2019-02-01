module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'vue/html-indent': [
      'error',
      4,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        vue: 'never',
        js: 'never',
      },
    ],
    'operator-linebreak': [
      2,
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'object-curly-newline': 0,
    indent: ['error', 4, { SwitchCase: 1 }],
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': ['error', { props: false }],
    'consistent-return': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': [2, { 'code': 150, ignoreUrls: true, ignoreStrings: true }],
  },
  settings: {
    'import/resolver': {
      'nuxt-import': {
        extensions: ['.mjs', '.js', '.jsx', '.vue', '.graphql', '.json'],
      },
    },
  },
};
