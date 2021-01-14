module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    hot: true,
<<<<<<< HEAD
    publicPath: "/dist",
    host: "localhost",
    port: 8080,
    proxy: {
      "*": "http://localhost:3000",
    },
  },
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
=======
		publicPath: '/dist',
		host: 'localhost',
		port: 8080,
		proxy: {
			'*': 'http://localhost:3000',
		}
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
		],
	},
>>>>>>> a489af8d68d3314e9b43e627702a96e3a0b022a8
};

