module.exports = {
  extends: ['airbnb-typescript', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-case-declarations': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-named-default': 'off',
    'max-len': ['error', 200],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'off',
    'no-unused-expressions': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [0, {
      jsx: 'always',
    }],
  },
};
