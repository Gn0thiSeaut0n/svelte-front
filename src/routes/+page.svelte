<script>
	import { Form, FormGroup, Input, Button } from 'sveltestrap';
	
	const color = 'primary';

	export let form;

	const arr = [];

	if(form && form.body.errors) {
		form.body.errors.forEach(obj => {
			arr.push(obj.field);
		});
	}
	
</script>
<div class="container">
	<Form method="POST">
		<FormGroup floating>
			<div slot="label">
				아이디
			</div>
			<Input class="{arr.includes('id') === true ? 'errors' : ''}" placeholder="값을 입력해주세요." name="id" type="text"/>
		</FormGroup>
		<FormGroup floating label="비밀번호">
			<Input class="{arr.includes('pw') === true ? 'errors' : ''}"  placeholder="값을 입력해주세요." name="pw" type="password"/>
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
	
	:global(.errors) {
		border: 1px solid red;
	} 
</style>