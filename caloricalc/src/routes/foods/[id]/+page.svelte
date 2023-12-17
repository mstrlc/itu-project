<script>
    import { page } from '$app/stores';
    import { getFood , deleteFood} from '../../../lib/api/foods';
    import { onMount } from 'svelte';

    var food;
    onMount(async () => {
		food = await getFood($page.params.id);
	});

    const navigateToEditFood = () => {
        window.location.href = '/foods/' + $page.params.id + '/edit';
    };

    const handleDeleteFood = async () => {
        deleteFood($page.params.id);
        window.location.href = '/foods';
    };
</script>

<div>
    {#if food}
    <button class="btn btn-primary" on:click={navigateToEditFood}>Edit food</button>
    <button class="btn btn-primary" on:click={handleDeleteFood}>Delete food</button>
    
    <h1>{food.name}</h1>
    <p>Calories: {food.calories}</p>
    <p>Proteins: {food.proteins}</p>
    <p>Carbohydrates: {food.carbohydrates}</p>
    <p>Fats: {food.fats}</p>
    <p>Fiber: {food.fiber}</p>
    <p>Sugars: {food.sugars}</p>
    <p>Salt: {food.salt}</p>
    {/if}
</div>