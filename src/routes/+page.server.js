import * as api from '$lib/api.js';
// import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();

        const body = await api.post('/api/test', {
			id: data.get('id'),
			pw: data.get('pw'),
		});

        return {
            body
        }
    }
}