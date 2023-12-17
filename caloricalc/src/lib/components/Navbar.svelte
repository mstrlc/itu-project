<script>
	import Pill from './Pill.svelte';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/"><span class="material-symbols-outlined">restaurant</span>caloriCalc</a>
	</div>
	<div class="flex-none ">
		<ul class="menu menu-horizontal px-1 text-base">
			<li><a href="/foods">Foods</a></li>
			<li><a href="/recipes">Recipes</a></li>
			<li><a href="/activities">Activities</a></li>
			<Pill>
				<div slot="icon">restaurant</div>
				<div slot="content">
					<li><a href="/foods">Foods</a></li>
					<li><a href="/recipes">Recipes</a></li>
				</div>
			</Pill>
		</ul>
	</div>
</div>

<style>
	.navbar {
		background-color: #262070;
		color: #ffffff;
	}
</style>
