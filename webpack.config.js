const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // main: path.join(__dirname, '/babel-preset-env/index.js'),
    demo: path.join(__dirname, '/demo/index3.js')
  },
  devtool: '',
  output: {
    path: path.join(__dirname, '/webpack-output/'), // 打包文件输出路径，绝对路径
  },
  resolve: {
    extensions: ['.es', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(j|e)s$/,
        use: 'babel-loader?cacheDirectory',
        // exclude: [path.join(__dirname, `/client/node_modules`)],
      },
    ]
  },
  plugins: [

  ]
};
