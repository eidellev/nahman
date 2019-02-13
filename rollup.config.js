import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

const babelConfig = {
  exclude: ['node_modules/**'],
  plugins: ['lodash'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
        modules: false,
      },
    ],
  ],
};

export default [
  {
    input: 'src/main.js',
    treeshake: true,
    output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
    plugins: [peerDepsExternal(), resolve(), commonjs(), babel(babelConfig), cleanup()],
  },
];
