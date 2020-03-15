module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      'import',
      {
        libraryName: 'antd',
        style: false
      }
    ]
  ]
};
