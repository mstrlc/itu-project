<script>
    /** @type {import('./$types').PageData} */
    import { page } from '$app/stores';
    import { getFood , editFood} from '../../../../lib/api/foods';
    import { onMount } from 'svelte';

    const handleEditFood = async () => {
        editFood(food.id, food.name, food.calories, food.proteins, food.carbohydrates, food.fats, food.fiber, food.sugars, food.salt);
        window.location.href = '/foods/' + food.id + '/';
    };

    var food;
    onMount(async () => {
		food = await getFood($page.params.id);
	});
</script>

<div>
    {#if food}
    <h1>Edit food</h1>
    <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Name</span>
        </div>
        <input type="text" bind:value={food.name} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Calories</span>
        </div>
        <input type="number" bind:value={food.calories} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Proteins</span>
        </div>
        <input type="number" bind:value={food.proteins} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Carbohydrates</span>
        </div>
        <input type="number" bind:value={food.carbohydrates} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Fats</span>
        </div>
        <input type="number" bind:value={food.fats} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Fiber</span>
        </div>
        <input type="number" bind:value={food.fiber} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Sugars</span>
        </div>
        <input type="number" bind:value={food.sugars} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Salt</span>
        </div>
        <input type="number" bind:value={food.salt} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </label>
    <button class="btn btn-primary" on:click={handleEditFood}>Edit food</button>
    {/if}
</div>