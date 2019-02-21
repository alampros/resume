module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  rules: {
    'no-descending-specificity': null,
    'no-eol-whitespace': [true, { ignore: ['empty-lines'] }],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'global',
          'local'
        ],
      }
    ],
  },

}
