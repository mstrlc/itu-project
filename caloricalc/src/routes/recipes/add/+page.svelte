<!-- Author: xseidl06
Date: 17.1.2023 -->
<script>
	import { onMount } from 'svelte';
    /** @type {import('./$types').PageData} */
    import { createRecipe, editRecipe, getRecipes } from '/src/lib/api/recipes';
    import { getFoods } from '/src/lib/api/foods';
    let id = '3';
    let name = '';
    let portions = 0;
    let foods = [];
    let recipes = [];
    let existingRecipes = [];
    let existingFoods = [];

    onMount(async () => {
        existingFoods = await getFoods();
        existingRecipes = await getRecipes();
    });

    const handleCreateRecipe = async () => {
        createRecipe(name, portions, foods, recipes);
        window.location.href = `/recipes`;
    };
    const handleEditRecipe = async () => {
        editRecipe(id, name, portions, foods, recipes);
        window.location.href = `/recipes`;
    };
    
</script>

<div>
    <h1>Add food</h1>
    <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Name</span>
        </div>
        <input type="text" bind:value={name} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Portions</span>
        </div>
        <input type="number" bind:value={portions} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        
        <div class="p-4">
            <span class="block text-sm font-medium text-gray-700">Foods:</span>
            <div class="space-y-2">
              {#each existingFoods as food, index}
                <div class="flex items-center">
                  <input
                    type="text"
                    bind:value={food.name}
                    class="mt-1 p-2 border rounded-md flex-grow"
                  />
                  <button
                    type="button"
                    on:click={() => existingRecipes.splice(index, 1)}
                    class="ml-2 p-2 bg-red-500 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              {/each}
            </div>
            <button class="btn btn-primary" on:click={() => recipes.push('')}>Add Food</button>
          </div>
    </label>
    <button class="btn btn-primary" on:click={handleCreateRecipe}>Create recipe</button>
</div>