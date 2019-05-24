import typescript from 'rollup-plugin-typescript2'
export default {
  input: './src/panzoom.ts',
  plugins: [
    typescript({
      tsconfigOverride: {
        exclude: ['node_modules', 'test'],
        compilerOptions: {
          declaration: true
        }
      }
    })
  ],
  output: {
    format: 'umd',
    name: 'Panzoom',
    file: 'dist/panzoom.js'
  },
  watch: {
    include: './src'
  }
}
