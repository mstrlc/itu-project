<!-- Author: xstrel03
	author: Ondrej Seidl <xseidl06>
Date: 17.12.2023 -->

<script>
	import Pill from './Pill.svelte';
</script>

<div class="navbar bg-base-100">
	<div class=" navbar-start">
		<a class="btn btn-ghost normal-case text-xl" href="/dashboard"><span class="material-symbols-outlined">restaurant</span>caloriCalc</a>
	</div>
	<div class=" navbar-center">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/foods">Foods</a></li>
			<li><a href="/recipes">Recipes</a></li>
			<li><a href="/meals">Meals</a></li>
			<li><a href="/activities">Activities</a></li>
			<li><a href="/leaderboard">Leaderboard</a></li>
		</ul>
	</div>
	<div class=" navbar-end">
		<a href="foods"><Pill><div slot="icon">restaurant</div> </Pill></a>
		<a href="activities"><Pill><div slot="icon">directions_Run</div></Pill></a>
	</div>
</div>

<style>
	.navbar {
		background-color: #262070;
		color: #ffffff;
	}
</style>
