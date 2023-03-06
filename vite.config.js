import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	//  CORS policy 문제 해결을 위해...
	// server: {
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://localhost:8080/',
	// 			changeOrigin: true,
	// 		}
	// 	}
	// }
};

export default config;
