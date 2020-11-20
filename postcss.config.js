module.exports = {
  modules: true,
  plugins: {
    'postcss-modules': {
      globalModulePaths: [
        /(?<!\.module)\.scss$/
      ]
    },
    autoprefixer: true
  }
}
