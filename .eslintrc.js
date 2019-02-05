module.exports = {
  root: true,
  extends: [
    'standard',
    'standard-react',
  ],
  plugins: [
    'react'
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        }],
      },
    },
  ],
  rules: {
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': ['warn', {
      arrays: 'only-multiline',
      objects: 'always-multiline',
      imports: 'only-multiline',
    }],
    quotes: ['warn', 'single'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-closing-tag-location': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-indent': [2, 2, { checkAttributes: true }],
  },
}
