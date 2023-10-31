<script>
	var response = '';

	async function testAPI() {
		const res = await fetch('/api/test', {
			method: 'GET'
		});
		const data = await res.json();
		response = data.message + ' at ' + data.time;
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">caloriCalc</h1>
			<p class="py-6">The best companion app to help you reach your nutrition goals</p>
			<button class="btn btn-primary" on:click={testAPI}>Test API</button>
			<p>Response from API:</p>
			<p>{response}</p>
		</div>
	</div>
</div>
