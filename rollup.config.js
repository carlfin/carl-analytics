import { terser } from 'rollup-plugin-terser';
import builtins from 'rollup-plugin-node-builtins';

const babel = require('rollup-plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');

const env = process.env.NODE_ENV;
const plugins = [
  builtins(),
  babel({
    exclude: 'node_modules/**',
    presets: ['@babel/env', '@babel/preset-react'],
  }),
  resolve({
    browser: true,
    preferBuiltins: false,
    extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(env),
  }),
  commonjs(),
];

module.exports = [
  {
    external: ['js-cookie', 'react', 'uuid'],
    input: {
      index: 'src/index.js',
    },
    output: [
      {
        dir: 'cjs',
        format: 'cjs',
      },
    ],
    plugins,
  },
  {
    input: {
      index: 'src/index.js',
    },
    output: [
      {
        dir: 'browser',
        format: 'iife',
        name: 'carl.analytics',
        plugins: [
          terser(),
        ],
      },
    ],
    plugins,
  },
];
