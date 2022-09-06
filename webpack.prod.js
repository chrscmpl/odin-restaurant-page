const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	optimization: {
		minimizer: [
			'...',
			new CssMinimizerPlugin(),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.squooshMinify,
					options: {
						encodeOptions: {
							mozjpeg: {
								quality: 100,
							},
						},
					},
					filter: source => source.byteLength < 200000,
				},
			}),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.squooshMinify,
					options: {
						encodeOptions: {
							mozjpeg: {
								quality: 60,
							},
						},
					},
					filter: source => source.byteLength < 1000000,
				},
			}),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.squooshMinify,
					options: {
						encodeOptions: {
							mozjpeg: {
								quality: 20,
							},
						},
					},
					filter: source => source.byteLength >= 1000000,
				},
			}),
		],
	},
	plugins: [new MiniCssExtractPlugin()],
});
