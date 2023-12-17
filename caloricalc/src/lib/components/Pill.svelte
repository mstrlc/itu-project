<div role="button" class="pill material-symbols-outlined">
	<slot name="icon" />
</div>

<style>
	.pill:hover {
		transition: 0.1s ease-in-out;
		background-color: #6b6fff;
		box-shadow: 0 0 10px #6b6fff;
	}
	.pill {
		margin-left: 5px;
		margin-right: 5px;
		padding: 5px 30px;
		border-radius: 30px;
		background-color: #8b90ff;
		color: #ffffff;
	}
</style>
