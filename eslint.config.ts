import antfu from '@antfu/eslint-config'
import stylistic from '@stylistic/eslint-plugin'
import oxlint from 'eslint-plugin-oxlint'

export default antfu({
  type: 'app',
  typescript: true,
  formatters: true,
  astro: true,
  plugins: {
    ...oxlint.configs['flat/recommended'],
    '@stylistic': stylistic,
  },
}, {
  rules: {
    'ts/no-redeclare': 'off',
    'ts/consistent-type-definitions': ['error', 'type'],
    'no-console': ['warn'],
    'antfu/no-top-level-await': ['off'],
    'node/prefer-global/process': ['off'],
    'node/no-process-env': ['error'],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'perfectionist/sort-imports': ['error', {
      tsconfigRootDir: '.',
    }],
  },
  // ...oxlint.configs['flat/recommended'],
})
