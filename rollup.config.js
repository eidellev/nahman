import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    treeshake: true,
    output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
    plugins: [peerDepsExternal(), resolve(), commonjs(), babel(), cleanup()],
  },
];
