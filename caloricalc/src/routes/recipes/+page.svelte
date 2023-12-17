<script>
	/** @type {import('./$types').PageData} */
	import { getRecipes } from '../../lib/api/recipes';
	import { getFoods } from '../../lib/api/foods';
	import { onMount } from 'svelte';
	var recipes;
	var foods;

	onMount(async () => {
		recipes = await getRecipes();
		foods = await getFoods();
	});

	const navigateToAddRecipe = () => {
		window.location.href = '/recipes/add';
	};

	const navigateToRecipeDetail = (id) => {
		window.location.href = '/recipes/' + id + '/';
	};
</script>

<div>
	<button class="btn btn-primary" on:click={navigateToAddRecipe}>Add recipe</button>
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
							<button class="btn btn-xl" on:click={navigateToRecipeDetail(recipes.id)}>Details</button>
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
