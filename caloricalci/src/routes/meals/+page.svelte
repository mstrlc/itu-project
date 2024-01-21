<script>
	/** @type {import('./$types').PageData} */

	var meals;

	async function getMeals() {
        const res = await fetch('/api/meals');
        const data = await res.json();
        meals = data;
};
</script>

<div>
	<button class="btn btn-primary" on:click={getMeals}>Load meals</button>
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
			{#if meals}
				{#each meals as meal}
					<tr>
						<td>{meal.id}</td>
						<td>{meal.name}</td>
						<td>{meal.calories} kcal</td>
						<td>{meal.proteins} g</td>
						<td>{meal.carbohydrates} g</td>
						<td>{meal.fats} g</td>
						<td>{meal.fiber} g</td>
						<td>{meal.sugars} g</td>
						<td>{meal.salt} g</td>
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
