<!-- Author: xnovym00
Date: 17.12.2023 -->
<script>
	/** @type {import('./$types').PageData} */
	import { getRecipes, editRecipe, createRecipe, deleteRecipe } from '../../lib/api/recipes';
	import { getFoods } from '../../lib/api/foods';
	import { onMount } from 'svelte';
	
	var recipes;
	var foods;

	onMount(async () => {
		recipes = await getRecipes();
		foods = await getFoods();
		
	});
	
	const navigateToFood = (id) => {
		window.location.href = '/foods/' + id + '/';
	};

	const handleRemoveIngredient = async (recipe, ingredient) => {
		recipe.foods = recipe.foods.filter(item => item !== ingredient);
		console.log("Removing " + ingredient.id + " from " + recipe.id);
		recipes = await editRecipe(recipe.id, recipe.name, recipe.portions, recipe.foods, recipe.recipes);
	}
	const handleAddIngredient = async (recipe, ingredient, amount) => {
		ingredient = foods.find(item => item.id == ingredient);
		if (ingredient == null){
			return;
		}
		if (amount == null){
			amount = document.getElementById("amount_" + recipe.id).value;
		}
		console.log("Adding " + ingredient.id + " to " + recipe.id + " with amount " + amount);
		recipe.foods.push({id: ingredient.id, amount: amount});
		recipes = await editRecipe(recipe.id, recipe.name, recipe.portions, recipe.foods, recipe.recipes);

	}

	const handleDeleteRecipe = async (recipe) => {
		console.log("Deleting " + recipe.id);
		recipes = await deleteRecipe(recipe.id);
	}

	const handleCopyRecipe = async (recipe) => {
		console.log("Copying " + recipe.id);
		let last_recipe = recipes[recipes.length - 1].id;
		recipes = await editRecipe(last_recipe, recipe.name, recipe.portions, recipe.foods, recipe.recipes);
		recipes = await createRecipe("", 0, [], []);
	}

	const handleChangeAmount = async (recipe, ingredient) => {
		let new_amount = document.getElementById(recipe.id + "_" + ingredient.id).value;
		console.log("Changing " + ingredient.id + " in " + recipe.id + " to " + new_amount);
		ingredient.amount = new_amount;
		recipes = await editRecipe(recipe.id, recipe.name, recipe.portions, recipe.foods, recipe.recipes);

	}

	const handleRenameRecipe = async (recipe) => {
		let new_name = document.getElementById("name_" + recipe.id).value;
		if (recipe.name == ""){
			recipes = await createRecipe("", 0, [], []);
		}
		else if (new_name == ""){
			recipes = await deleteRecipe(recipe.id);
		}
		
		recipe.name = new_name;
		console.log("Renaming " + recipe.id + " to " + new_name);
		recipes = await editRecipe(recipe.id, new_name, recipe.portions, recipe.foods, recipe.recipes);
		
	}

	const newOrExisting = (recipe) => {
		if (recipe.name == "") {
			return "Add new recipe";
		} else {
			return recipe.name;
		}
	}
</script>

<div>
		<table class="table">
			<tbody >
			<div class="">
			{#if recipes}
			
				{#each recipes as recipe}
				<div id="d_{recipe.id}">
					{#if recipe.name != ""}
					<div class="collapse bg-base-200 float-right w-fit h-full">
						<!-- delete recipe-->
						<button class="btn btn-error material-symbols-outlined h-full" value="{recipe}" on:click={handleDeleteRecipe(recipe)}>delete</button>
					</div>
					<div class="collapse bg-base-200 float-right w-fit h-full">
						<!-- delete recipe-->
						<button class="btn btn-accent material-symbols-outlined h-full" value="{recipe}" on:click={handleCopyRecipe(recipe)}>content_copy</button>
					</div>
					{/if}
				
					<div  class="collapse-arrow collapse border border-neutral bg-base-200 item w-11/12">
						<input type="checkbox" />
						<div class="collapse-title font-medium">
							<input class="input input-ghost text-xl" id={recipe.id} value="{newOrExisting(recipe)}">

						</div>
						
						<div class="collapse-content bg-base-300">
							<input type="text" placeholder="{newOrExisting(recipe)}" id="name_{recipe.id}" on:change={handleRenameRecipe(recipe)} class="input input-bordered input-primary">
							{#if recipe.name != ""}	
							<thead class="text-lg text-primary">
								<tr >
									<th>Ingredient</th>
									<th>Amount</th>
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

											{#if food.id == ingredient.id}
											<tr id="v_{recipe.id}_{ingredient.id}" >
												<td>
													<div class="indicator">
														<span class="indicator-item badge material-symbols-outlined bg-primary">edit</span> 
													<button class="btn btn-ghost btn-outline align-middle" on:click={navigateToFood(food.id)}>{food.name}</button>
													</div>
												</td>
												<td class="w-20"><input type="text" id="{recipe.id}_{ingredient.id}" on:change={handleChangeAmount(recipe, ingredient)} value="{ingredient.amount}" class="input input-bordered input-primary input-sm w-4/5"> g</td>
												<td>{(food.calories * ingredient.amount/100).toFixed(0)} kcal</td>
												<td>{(food.proteins * ingredient.amount/100).toFixed(0)} g</td>
												<td>{(food.carbohydrates * ingredient.amount/100).toFixed(2)} g</td>
												<td>{(food.fats * ingredient.amount /100).toFixed(0)} g</td>
												<td>{(food.fiber * ingredient.amount/100).toFixed(0)} g</td>
												<td>{(food.sugars * ingredient.amount/100).toFixed(0)} g</td>
												<td>{(food.salt * ingredient.amount/100).toFixed(0)} g</td>
												<td><button class="btn btn-xl btn-error material-symbols-outlined" value="{food.id}" on:click={handleRemoveIngredient(recipe, ingredient)}>close</button></td>
											</tr>
											{/if}
										
									{/each}
								{/each}
							{/if}
							<tr>
								<td>
									<select class="select select-bordered select-primary" id="select_{recipe.id}">
										{#if foods}
											{#each foods as food}
												{#if !recipe.foods.includes(food)}
													<option value="{food.id}">{food.name}</option>
												{/if}
											{/each}
										{/if}
									</select>
								</td>
								<td class="w-20"><input type="text" id="amount_{recipe.id}" value="100" class="input input-bordered input-primary input-sm w-4/5"> g</td>
								<td><button class="btn btn-xl btn-success material-symbols-outlined" value="{recipe}" on:click={handleAddIngredient(recipe, document.getElementById("select_" + recipe.id).value)}>add</button></td>
							</tr>
							{/if}
						</div>
						

					</div>
				</div>
				{/each}
			{/if}
		</div>
		</tbody>
	</table>
</div>