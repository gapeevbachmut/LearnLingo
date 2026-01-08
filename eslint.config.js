import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],

    languageOptions: {
      globals: globals.browser,
      sourceType: 'module',
    },

    plugins: {
      js,
    },

    extends: ['js/recommended'],

    rules: {
      'no-undef': 'error', // ❗ змінна не оголошена
      'no-unused-vars': 'warn', // ⚠ не використовується
      'no-shadow': 'warn', // ⚠ перекриття змінних
      'id-match': [
        'error',
        '^[a-zA-Z_$][a-zA-Z0-9_$]*$',
        {
          onlyDeclarations: true,
        },
      ],
    },
  },
]);

// перевірити код - npx eslint js/teachers/teachers-list.js
