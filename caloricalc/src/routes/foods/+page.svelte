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
					<td>{food.name}</td>
					<td>{food.calories}</td>
					<td>{food.proteins}</td>
					<td>{food.carbohydrates}</td>
					<td>{food.fats}</td>
					<td>{food.fiber}</td>
					<td>{food.sugars}</td>
					<td>{food.salt}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
