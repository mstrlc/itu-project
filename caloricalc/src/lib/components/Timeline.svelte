<script>
	export let date;

	import { onMount } from 'svelte';
	import { getActivities } from '../api/activities';
	import { getMeals, getMealsMacros } from '../api/meals';
	import TimelineItem from './TimelineItem.svelte';

	$: currentDate = $date.toLocaleDateString('sv-SE');

	var activities;
	var meals;
	var items = [];

	var values = {
		calories: 0,
		protein: 0,
		carbohydrates: 0,
		fats: 0,
		fiber: 0,
		sugar: 0,
		salt: 0
	};

	onMount(async () => {
		activities = await getActivities();
		meals = await getMeals();
		items = activities.concat(meals);
		items.sort((a, b) => (a.time < b.time ? -1 : 1));
		values = await getMealsMacros(meals);
	});
</script>

<p>{currentDate}</p>

<div class="flex">
	<div class="w-1/3">
		{#if items}
			<ul class="timeline timeline-vertical">
				{#each items as item}
					{#if item.time.split('T')[0] == currentDate}
						<TimelineItem {item} />
					{/if}
				{/each}
			</ul>
		{/if}
	</div>
	<div class="w-2/3">
			<div class="mb-4">
				<h3 class="text-xl font-bold">Calories</h3>
				<progress class="progress w-56" value="{values.calories}" max="2500" style="width: 90%;"></progress>
				<p>{values.calories} calories</p>
				<p>{(values.calories / 2500 * 100).toFixed(2)}%</p>
			</div>
			<div class="mb-4">
				<h3 class="text-xl font-bold">Protein</h3>
				<progress class="progress w-56" value="{values.protein}" max="100" style="width: 90%;"></progress>
				<p>{values.protein} grams</p>
				<p>{(values.protein / 100 * 100).toFixed(2)}%</p>
			</div>
			<div class="mb-4">
				<h3 class="text-xl font-bold">Carbohydrates</h3>
				<progress class="progress w-56" value="{values.carbohydrates}" max="300" style="width: 90%;"></progress>
				<p>{values.carbohydrates} grams</p>
				<p>{(values.carbohydrates / 300 * 100).toFixed(2)}%</p>
			</div>
			<div class="mb-4">
				<h3 class="text-xl font-bold">Fats</h3>
				<progress class="progress w-56" value="{values.fats}" max="70" style="width: 90%;"></progress>
				<p>{values.fats} grams</p>
				<p>{(values.fats / 70 * 100).toFixed(2)}%</p>
			</div>
			<div class="mb-4">
				<h3 class="text-xl font-bold">Fiber</h3>
				<progress class="progress w-56" value="{values.fiber}" max="30" style="width: 90%;"></progress>
				<p>{values.fiber} grams</p>
				<p>{(values.fiber / 30 * 100).toFixed(2)}%</p>
			</div>
			<div class="mb-4">
				<h3 class="text-xl font-bold">Sugar</h3>
				<progress class="progress w-56" value="{values.sugar}" max="50" style="width: 90%;"></progress>
				<p>{values.sugar} grams</p>
				<p>{(values.sugar / 50 * 100).toFixed(2)}%</p>
			</div>
			<div class="mb-4">
				<h3 class="text-xl font-bold">Salt</h3>
				<progress class="progress w-56" value="{values.salt}" max="6" style="width: 90%;"></progress>
				<p>{values.salt} grams</p>
				<p>{(values.salt / 6 * 100).toFixed(2)}%</p>
			</div>
		</div>
	</div>
