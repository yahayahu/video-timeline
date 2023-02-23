module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    "jest/globals": true,
  },
  globals: {
    window: true,
    module: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.json'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  ignorePatterns: ['.*.js', 'webpack.*.js', '*.json'],
  rules: {
    'max-len': [2, 120, 2],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'always-multiline',
      }
    ],
    quotes: [2, "single", { "avoidEscape": true }],
    semi: 'error',
    'no-console': 'warn',
    'prettier/prettier': ['error'],
  },
};
