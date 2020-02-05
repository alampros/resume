module.exports = {
  root: true,
  extends: [
    'standard',
    'standard-react',
    'plugin:import/typescript'
  ],
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
    'simple-import-sort',
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
  settings: {
    'import/resolver': {
      typescript: {
        directory: __dirname,
      },
      webpack: 'webpack.config.js',
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
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
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': [0, { caseSensitive: true }],
    'import/order': 'off',
    'simple-import-sort/sort': ['error', {
      groups: [
        // Node.js builtins. You could also generate this regex if you use a `.js` config.
        // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
        [
          '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
        ],
        // Packages. `react` related packages come first.
        ['^react', '^@?\\w'],
        // Internal packages.
        ['^(@|components|exts|data|hooks|idb|layouts|logo|pages|types|utils|api|api_supplimental)(/.*|$)'],
        // Side effect imports.
        ['^\\u0000'],
        // Parent imports. Put `..` last.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports. Put same-folder imports and `.` last.
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Style imports.
        ['^.+\\.s?css$'],
      ],
    }],
    'sort-imports': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-indent': [2, 2, { checkAttributes: true }],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/prop-types': ['error', { ignore: ['children', 'className', 'style'] }],
    'keyword-spacing': ['error', {
      overrides: {
        if: { after: false },
        for: { after: false },
        while: { after: false },
        catch: { after: false },
        switch: { after: false },
      },
    }],
  },
}
