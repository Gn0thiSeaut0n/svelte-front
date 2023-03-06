import { error } from '@sveltejs/kit';

const base = 'http://localhost:8080';

const send = async({ method, path, data }) => {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	const res = await fetch(`${base}${path}`, opts);
	
	let result = await res.text();
	result = result ? JSON.parse(result) : {};

	if (res.ok) 
		return result;

	throw error(res.status, result);
}

export const get = path => {
	console.log('get');
	return send({ method: 'GET', path });
}

export const del = path => {
	console.log('del');
	return send({ method: 'DELETE', path });
}

export const post = (path, data) => {;
	console.log('post');
	return send({ method: 'POST', path, data });
}

export const put = (path, data) => {;
	console.log('put');
	return send({ method: 'PUT', path, data });
}