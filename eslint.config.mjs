// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default [
  // Configuração base para JavaScript
  js.configs.recommended,

  // Configuração base para TypeScript
  ...tseslint.configs.recommended,

  // Plugin do Prettier
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Define quais arquivos aplicar o lint
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },

  // Ignora pastas
  {
    ignores: ['node_modules', 'dist', 'build'],
  },
];
