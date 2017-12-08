module.exports = {
    entry: './src/app.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env' ],
              },
            },
          },
        ],
      },
resolve: {
  extensions: ['.js', '.es6'],
},
};
