import * as api from '$lib/api.js';
// import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        console.log('test');

        const body = await api.post('/api/test', {
			id: data.get('id'),
			pw: data.get('pw'),
		});
        console.log('test');
        // 성공 시, 던져주면 될 것 같음
        console.log(body);
    }
}