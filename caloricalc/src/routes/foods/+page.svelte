<script>
	/** @type {import('./$types').PageData} */

	var foods;

	async function getFoods() {
        const res = await fetch('/api/foods');
        const data = await res.json();
        foods = data;
};
</script>

<div>
	<button class="btn btn-primary" on:click={getFoods}>Load foods</button>
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
			{#if foods}
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
			{:else}
			<tr>
				<td colspan="9">No data</td>
			</tr>
			{/if}
		</tbody>
	</table>
</div>
