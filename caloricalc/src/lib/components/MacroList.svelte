<!-- Author: xstrel03
Date: 19.1.2023 -->

<script>
	import { onMount } from 'svelte';
	import { getUserGoals, getUserFilters } from '../api/user';

	export let item;

	let goalsPromise;
	let filtersPromise;

	onMount(async () => {
		goalsPromise = await getUserGoals();
		filtersPromise = await getUserFilters();
	});
</script>

{#await goalsPromise then goals}
	{#if goals}
		{#await filtersPromise then filters}
			{#if filters}
				{#each ['calories', 'proteins', 'carbohydrates', 'fats', 'fiber', 'sugars', 'salt'] as macro}
					{#if filters[macro]}
						<div class="mb-4">
							<h3 class="text-xl font-bold">{macro.charAt(0).toUpperCase() + macro.slice(1)}</h3>
							<progress
								class="progress w-56"
								value={item[macro]}
								max={goals[macro]}
								style="width: 90%;"
							/>
							<p>{item[macro]} g / {goals[macro]} g</p>
							<p>{((item[macro] / goals[macro]) * 100).toFixed(0)}%</p>
						</div>
					{/if}
				{/each}
			{/if}
		{/await}
	{/if}
{/await}
