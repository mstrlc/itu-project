<script>
	import { onMount } from 'svelte';
	import { getUser, editUserFilters, editUserGoals } from '../../../lib/api/user';

	var user;
	var goals;
	var filters;

	onMount(async () => {
		user = await getUser();
		goals = user[0].goals;
		filters = user[0].filters;
	});

	async function saveAndLeave() {
		await editUserFilters(filters);
		goals = Object.fromEntries(Object.entries(goals).map(([key, value]) => [key, parseInt(value)]));
		await editUserGoals(goals);
		window.location.href = '/dashboard';
	}
</script>

{#if user}
	<div class="text-xl font-black">Goals and filters</div>
	<div>
		{#each Object.entries(goals) as [category]}
			<div>
				<h2>{category[0].toUpperCase() + category.slice(1)}</h2>
				<input type="number" bind:value={goals[category]} />
				<input type="checkbox" bind:checked={filters[category]} />
			</div>
		{/each}
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="btn btn-primary" on:click={saveAndLeave}>Save</div>
{/if}
