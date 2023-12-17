<script>
	export let date;

	import { onMount } from 'svelte';
	import { getActivities } from '../api/activities';
	import { getMeals } from '../api/meals';
	import TimelineItem from './TimelineItem.svelte';

	$: currentDate = $date.toLocaleDateString('sv-SE');

	var activities;
	var meals;
	var items = [];

	onMount(async () => {
		activities = await getActivities();
		meals = await getMeals();
		items = activities.concat(meals);
		items.sort((a, b) => (a.time < b.time ? -1 : 1));
	});
</script>

<p>{currentDate}</p>

{#if items}
	<ul class="timeline timeline-vertical">
		{#each items as item}
			{#if item.time.split('T')[0] == currentDate}
				<TimelineItem {item} />
			{/if}
		{/each}
	</ul>
{/if}
