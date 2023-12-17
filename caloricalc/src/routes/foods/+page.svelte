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
	<h1>Foods</h1>
	<button class="btn btn-primary" on:click={navigateToAddFood}>Add food</button>
	<table class="table">
		<thead>
			<tr>
                <!-- <th>ID</th> -->
				<th>Name</th>
				<th>Calories</th>
				<!-- <th>Protein</th>
				<th>Carbohydrates</th>
				<th>Fat</th>
				<th>Fiber</th>
				<th>Sugar</th>
				<th>Salt</th> -->
			</tr>
		</thead>
		<tbody>
			{#if foods}
				{#each foods as food}
				<tr>
					<td>
					  <div class="flex items-center gap-3">
						<div class="avatar">
						  <div class="mask mask-squircle w-12 h-12">
							<img src="/" alt="" />
						  </div>
						</div>
						<div>
						  <div class="font-bold">{food.name}</div>
						</div>
					  </div>
					</td>
					<td>
					  {food.calories}
					</td>
					<th>
					  <button class="btn btn-xs" on:click={navigateToFoodDetail(food.id)}>details</button>
					</th>
				</tr>
					<!-- <tr>
						<td>{food.id}</td>
						<td>{food.name}</td>
						<td>{food.calories} kcal</td>
						<td>{food.proteins} g</td>
						<td>{food.carbohydrates} g</td>
						<td>{food.fats} g</td>
						<td>{food.fiber} g</td>
						<td>{food.sugars} g</td>
						<td>{food.salt} g</td>
					</tr> -->
				{/each}
			{:else}
			<tr>
				<td colspan="9">No data</td>
			</tr>
			{/if}
		</tbody>
	</table>
</div>
