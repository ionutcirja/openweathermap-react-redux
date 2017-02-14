/* eslint-disable import/newline-after-import, new-cap */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = new express();
const port = 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, (error) => {
	if (error) {
		console.error(error);
	} else {
		console.info('Listening on port %s', port);
	}
});
