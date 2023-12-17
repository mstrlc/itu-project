<script>
	export let date;

	import { onMount } from 'svelte';
	import { getActivities } from '../api/activities';
	import { getMeals } from '../api/meals';

	$: currentDate = $date.toLocaleDateString('sv-SE');

	var activities;
	var meals;

	onMount(async () => {
		activities = await getActivities();
		meals = await getMeals();
	});
</script>

<p>{currentDate}</p>

{#if activities}
	{#each activities as activity}
		{#if activity.start.split('T')[0] == currentDate}
			<p>{activity.name}</p>
		{/if}
	{/each}
{/if}

{#if meals}
	{#each meals as meal}
		{#if meal.time.split('T')[0] == currentDate}
			<p>{meal.name}</p>
		{/if}
	{/each}
{/if}
