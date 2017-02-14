import request from 'superagent';
import config from '../config';

function getDefaultHeaders() {
	return {
		Accept: 'application/json'
	};
}

function setHeaders(headers) {
	return Object.assign({}, getDefaultHeaders(), headers);
}

function computeEndpint(endpoint) {
	return `${config.API_BASE_URL}${endpoint}&APPID=${config.API_KEY}`;
}

function endCallback(resolve, reject, error, response) {
	try {
		const resObj = response.text ? JSON.parse(response.text) : {};

		if (error) {
			reject({ error: true, data: resObj, status: response.status });
			return;
		}

		resolve(resObj);
	} catch (unknownError) {
		reject({ error: true, data: { message: 'Unknown error' } });
	}
}

function send(method, endpoint, values, headers) {
	return new Promise((resolve, reject) => {
		method(computeEndpint(endpoint))
			.set(setHeaders(headers))
			.send(values)
			.end((error, response) => {
				endCallback(resolve, reject, error, response);
			});
	});
}

export function get(endpoint, headers = {}) {
	return new Promise((resolve, reject) => {
		request
			.get(computeEndpint(endpoint))
			.set(setHeaders(headers))
			.end((error, response) => {
				endCallback(resolve, reject, error, response);
			});
	});
}

export function del(endpoint, headers = {}) {
	return new Promise((resolve, reject) => {
		request
			.del(computeEndpint(endpoint))
			.set(setHeaders(headers))
			.end((error, response) => {
				endCallback(resolve, reject, error, response);
			});
	});
}

export function post(endpoint, values, headers = {}) {
	return send(request.post, endpoint, values, headers);
}

export function put(endpoint, values, headers = {}) {
	return send(request.put, endpoint, values, headers);
}
