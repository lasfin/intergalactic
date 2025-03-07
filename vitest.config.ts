/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import babel from 'vite-plugin-babel';
import { resolve as resolvePath } from 'path';

export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        presets: [
          ['@babel/preset-react', { throwIfNamespace: false }],
          ['@semcore/babel-preset-ui', { cssStyle: { extract: null } }],
        ],
        plugins: ['babel-plugin-transform-import-meta'],
      },
      filter: /\.(j|t)sx?$/,
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@semcore\/utils\/lib\/(.*)/,
        replacement: resolvePath(__dirname, 'semcore/utils/src/$1'),
      },
      {
        find: /^@semcore\/icon\/(.*)/,
        replacement: resolvePath(__dirname, 'semcore/icon/$1'),
      },
      {
        find: /^@semcore\/esbuild-plugin-semcore\/(.*)/,
        replacement: resolvePath(__dirname, 'tools/esbuild-plugin-semcore/$1'),
      },
      {
        find: /^@semcore\/testing-utils\/(.*)/,
        replacement: resolvePath(__dirname, 'tools/testing-utils/$1'),
      },
      {
        find: /^@semcore\/([\w-]*)$/,
        replacement: resolvePath(__dirname, 'semcore/$1/src'),
      },
    ],
  },
  test: {
    testTimeout: 60 * 1000,
    include: [
      'semcore/*/__tests__/**/*.tsx',
      'semcore/*/__tests__/**/*.jsx',
      'semcore/*/__tests__/**/*.ts',
      'semcore/*/__tests__/**/*.js',
      'tools/*/__tests__/**/*.tsx',
      'tools/*/__tests__/**/*.jsx',
      'tools/*/__tests__/**/*.ts',
      'tools/*/__tests__/**/*.js',
    ],
    exclude: [
      'semcore/*/__tests__/**/*.vo-test.ts',
      'semcore/*/__tests__/**/*.browser-test.ts',
      'semcore/*/__tests__/**/*.browser-test.tsx',
      '**/__fixtures__',
      'tools/icon-transform-svg',
      '**/*.d.ts',
      'node_modules',
      'dist',
      '.idea',
      '.git',
      '.cache',
    ],
    environment: 'jsdom',
    setupFiles: resolvePath(__dirname, 'tools/testing-utils/setupTests'),
  },
  define: {
    'globalThis.__intergalacticFlagsBaseUrl': '"https://static.semrush.com/ui-kit/flags/"',
  },
});

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchImageSnapshot(task: any, options: any): R;
      toHaveNoViolations(): R;
      toHaveFocus(): R;
      toHaveStyle(style: string): R;
    }
  }
}
