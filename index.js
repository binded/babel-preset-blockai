module.exports = {
  presets: ['eslatest-node6'],
  plugins: [
    'transform-es2015-destructuring',
    'transform-es2015-parameters',
    ['transform-object-rest-spread', { useBuiltIns: true }]
  ],
}
