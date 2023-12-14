<script>
	export const icon = 'home';
</script>

<button>
	<span class="material-symbols-outlined"><slot /></span>
</button>

<style>
	button {
		padding: 5px 30px;
		border-radius: 30px;
		background-color: #8b90ff;
		display: inline-flex;
		color: #ffffff;
	}

	button:hover {
		transition: 0.1s ease-in-out;
		background-color: #6b6fff;
		box-shadow: 0 0 10px #6b6fff;
	}
</style>
