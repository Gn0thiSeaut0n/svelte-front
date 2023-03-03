<!-- 기초 단계 나중에 시간이 난다면 +page.server.js로 옮기는 작업 진행할 것 -->
<script>
	import { Form, FormGroup, Input, Button } from 'sveltestrap';
	import * as api from '$lib/api.js';

	const color = 'primary';

	let id = '';
	let pw = '';

	const signin = async() => {
		await api.post('/api/test', {
			id: id,
			pw: pw,
		}).then(response => {
			console.log(response);
		}).catch(e => {
			console.log(e);
		});

	}

</script>
<div class="container">
	<Form action="/login" method="POST">
		<FormGroup floating label="아이디">
			<Input placeholder="값을 입력해주세요." type="text" bind:value="{id}"/>
		</FormGroup>
		<FormGroup floating label="비밀번호">
			<Input placeholder="값을 입력해주세요." type="password" bind:value="{pw}"/>
		</FormGroup>
	</Form>
	<Button on:click={signin} block {color} type="submit">로그인</Button>
</div>

<style>
	.container {
		display: block;
		width: 20%;
		margin: 15% 40%;		
	}
</style>