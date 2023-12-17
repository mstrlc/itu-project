<script>
	export const icon = 'home';
</script>

<div class="dropdown dropdown-hover dropdown-end dropdown-center">
	<div tabindex="0" role="button" class=" material-symbols-outlined"><slot name="icon" /></div>
	<ul tabindex="0" class="dropdown-content z-[0] menu p-0 shadow bg-base-100 rounded-box -translate-y-0 -translate-x-1 w-50">
		<slot name="content" />
	</ul>
  </div>

<style>
	.dropdown:hover {
		visibility: hidden;
	}
	.dropdown {
		padding: 5px 30px;
		border-radius: 30px;
		background-color: #8b90ff;
		color: #ffffff;
	}

	.dropdown-content {
		
		
	}

	.dropdown-content:hover
	{
		transition: 0.1s ease-in-out;
		background-color: #6b6fff;
		box-shadow: 0 0 10px #6b6fff;
	}
</style>
