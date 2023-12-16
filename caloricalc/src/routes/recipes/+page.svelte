<script>
	/** @type {import('./$types').PageData} */

	var recipes;
	var foods;

	async function getRecipes() {
		const res = await fetch('/api/recipes');
		const data = await res.json();
		recipes = data;
		const foods_res = await fetch('/api/foods');
		const foods_data = await foods_res.json();
		foods = foods_data;
	}
</script>

<div>
	<button class="btn btn-primary" on:click={getRecipes}>Load recipes</button>
	<table class="table">
		<tbody>
			{#if recipes}
				{#each recipes as recipe}
					<div class="collapse-arrow collapse border border-base-300 bg-base-200">
						<input type="checkbox" />
						<div class="collapse-title text-xl font-medium">
							{recipe.name}
						</div>
						<div class="collapse-content">
							<thead>
								<tr>
									<th>Amount</th>
									<th>Id</th>
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
							{#if foods}
								{#each recipe.foods as ingredient}
									{#each foods as food}
										<tr>
											{#if food.id == ingredient.id}
												<td>{ingredient.amount} g</td>
												<td>{food.id}</td>
												<td>{food.name}</td>
												<td>{food.calories} kcal</td>
												<td>{food.proteins} g</td>
												<td>{food.carbohydrates} g</td>
												<td>{food.fats} g</td>
												<td>{food.fiber} g</td>
												<td>{food.sugars} g</td>
												<td>{food.salt} g</td>
											{/if}
										</tr>
									{/each}
								{/each}
							{/if}
						</div>
					</div>
				{/each}
			{:else}
				<tr>
					<td colspan="9">No data</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>
