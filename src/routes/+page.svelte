<!-- 기초 단계 나중에 시간이 난다면 +page.server.js로 옮기는 작업 진행할 것 -->
<script>
	import { Form, FormGroup, Input, Button } from 'sveltestrap';
	// import * as api from '$lib/api.js';

	// export let data;

	const color = 'primary';

	let id = '';
	let pw = '';

	// const signin = async() => {
	// 	await api.post('/api/test', {
	// 		id: id,
	// 		pw: pw,
	// 	}).then(response => {
	// 		console.log(response);
	// 	}).catch(e => {
	// 		console.log(e);
	// 	});
	// }

	const handleKeyup = e => {
		// if(e.keyCode === 13)
			// signin();
    }

</script>
<div class="container">
	<Form method="POST">
		<FormGroup floating label="아이디">
			<Input placeholder="값을 입력해주세요." name="id" type="text" bind:value="{id}" on:keyup={handleKeyup}/>
		</FormGroup>
		<FormGroup floating label="비밀번호">
			<Input placeholder="값을 입력해주세요." name="pw" type="password" bind:value="{pw}" on:keyup={handleKeyup}/>
		</FormGroup>
		<Button block {color}>로그인</Button>
	</Form>
</div>

<style>
	.container {
		display: block;
		width: 20%;
		margin: 15% 40%;		
	}
</style>