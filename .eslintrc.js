module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'vue/attribute-hyphenation': 'warn',
    'vue/attributes-order': 'warn',
    'vue/no-ref-as-operand': 'error',
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-explicit-any': 0,
    camelcase: 0,
    'no-use-before-define': 0,
    semi: ['error', 'never'],
    '@typescript-eslint/no-empty-interface': 0,
    'no-useless-concat': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-restricted-globals': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'max-len': ['warn', { code: 160 }],
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': 0,
    'no-unreachable-loop': 0,
    'array-callback-return': 0,
    'comma-dangle': ['error', 'never']
  }
}
