<!--
	author: Ondrej Seidl <xseidl06>
	date : 17.12.2023
-->
<div class="dropdown dropdown-hover dropdown-end">
	<div tabindex="0" role="button" class="material-symbols-outlined"><slot name="icon" /></div>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<ul tabindex="0" class="dropdown-content z-[0] menu p-0 shadow bg-base-100 rounded-box -translate-y-8 -translate-x-1">
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
		background-color: #8b90ff;
		min-width: auto;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
	}

	.dropdown-content:hover
	{
		transition: 0.1s ease-in-out;
		background-color: #6b6fff;
		box-shadow: 0 0 10px #6b6fff;
	}
</style>