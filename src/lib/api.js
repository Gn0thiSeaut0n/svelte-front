import { error } from '@sveltejs/kit';

const send = async({ method, path, data }) => {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	const res = await fetch(`${path}`, opts);
	if (res.ok) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}

	throw error(res.status);
}

export const get = path => {
	return send({ method: 'GET', path });
}

export const del = path => {
	return send({ method: 'DELETE', path });
}

export const post = (path, data) => {
	return send({ method: 'POST', path, data });
}

export const put = (path, data) => {
	return send({ method: 'PUT', path, data });
}