module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'no-duplicate-selectors': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    indentation: [
      2,
      {
        except: ['value'],
        severity: 'warning'
      }
    ]
  }
}
