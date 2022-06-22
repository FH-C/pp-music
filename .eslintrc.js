module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:tailwindcss/recommended', 'plugin:vue/vue3-recommended'],
  parser: "vue-eslint-parser",
  plugins: ['vue', 'tailwindcss'],
  parserOptions: {
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'vue/html-self-closing': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/semi': 'off',
    'semi': ['error', 'never']
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        map: [['@', './src']],
      },
    },
  }
}
