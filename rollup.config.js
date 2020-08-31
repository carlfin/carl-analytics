const babel = require('rollup-plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');

const env = process.env.NODE_ENV;

module.exports = [
  {
    external: ['react', 'uuid'],
    input: {
      index: 'src/index.js',
    },
    output: [
      {
        chunkFileNames: 'chunk-[hash].js',
        dir: 'dist',
        format: 'cjs',
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
      }),
      resolve({
        preferBuiltins: false,
        extensions: ['.mjs', '.js', '.jsx', '.json', '.node'],
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      commonjs(),
    ],
  },
];
