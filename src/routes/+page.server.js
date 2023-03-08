import * as api from '$lib/api.js';

let user;

export const load = () => {
    return {
        user
    }
}

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        user = await api.post('/api/test', {
			id: data.get('id'),
			pw: data.get('pw'),
		});
    }
}