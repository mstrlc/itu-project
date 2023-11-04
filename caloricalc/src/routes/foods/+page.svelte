<script>
	/** @type {import('./$types').PageData} */
	var foods = [];

	import { onMount } from 'svelte';

	onMount(async () => {
		const res = await fetch('/api/foods', {
			method: 'GET'
		});
		var json = await res.json();
		foods = json.foods;
	});
</script>

<div class="overflow-x-auto">
	<table class="table table-zebra">
		<thead>
			<tr>
                <th>ID</th>
				<th>Name</th>
				<th>Calories</th>
				<th>Protein</th>
				<th>Carbohydrates</th>
				<th>Fat</th>
				<th>Fiber</th>
				<th>Sugar</th>
				<th>Salt</th>
			</tr>
		</thead>
		<tbody>
			{#each foods as food}
				<tr>
                    <td>{food.id}</td>
					<td>{food.name}</td>
					<td>{food.calories} kcal</td>
					<td>{food.proteins} g</td>
					<td>{food.carbohydrates} g</td>
					<td>{food.fats} g</td>
					<td>{food.fiber} g</td>
					<td>{food.sugars} g</td>
					<td>{food.salt} g</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
