<script>
	export let date;

	import { onMount } from 'svelte';

	$: currentDate = $date.toLocaleDateString('sv-SE');

	var activities;
	var meals;

	onMount(() => {
		getActivities();
		getMeals();
	});

	async function getActivities() {
		const res = await fetch('/api/activities');
		const data = await res.json();
		activities = data;
	}

	async function getMeals() {
		const res = await fetch('/api/meals');
		const data = await res.json();
		meals = data;
	}
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
