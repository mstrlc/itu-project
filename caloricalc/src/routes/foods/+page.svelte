<script>
	import { onMount } from 'svelte';
	/** @type {import('./$types').PageData} */
	import { createFood, deleteFood, editFood, getFood, getFoods } from '../../lib/api/foods';
	var foods;

// 	async function getFoods() {
//         const res = await fetch('/api/foods');
//         const data = await res.json();
//         foods = data;
// };
	onMount(async () => {
		foods = await getFoods();
	});

	const navigateToAddFood = () => {
		window.location.href = '/foods/add';
	};

	const navigateToFoodDetail = (id) => {
		window.location.href = '/foods/' + id + '/';
	};
</script>

<div>
	<button class="btn btn-primary" on:click={navigateToAddFood}>Add food</button>
	<table class="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Calories</th>
			</tr>
		</thead>
		<tbody>
			{#if foods}
				{#each foods as food}
				<tr>
					<td>
					  <div class="flex items-center gap-3">
						<div>
						  <div class="font-bold">{food.name}</div>
						</div>
					  </div>
					</td>
					<td>
					  {food.calories}
					</td>
					<th>
					  <button class="btn btn-xs" on:click={navigateToFoodDetail(food.id)}>Details</button>
					</th>
				</tr>
				{/each}
			{:else}
			<tr>
				<td colspan="9">No data</td>
			</tr>
			{/if}
		</tbody>
	</table>
</div>
