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

{#if food}
    <button class="btn btn-primary" on:click={navigateToEditFood}>Edit food</button>
    <button class="btn btn-primary" on:click={handleDeleteFood}>Delete food</button>

    <div>
        <div class="text-xl font-bold">{food.name}</div>
    </div>

    <div class="stat">
        <div class="stat-title">Calories</div>
        <div class="stat-value">{food.calories}</div>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>
    
    <div class="stat">
        <div class="stat-title">Proteins</div>
        <div class="stat-value">{food.proteins}</div>
    </div>

    <div class="mb-4">
        <progress class="progress w-56" value="{food.proteins}" max="100" style="width: 90%;"></progress>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>
    
    <div class="stat">
        <div class="stat-title">Carbohydrates</div>
        <div class="stat-value">{food.carbohydrates}</div>
    </div>

    <div class="mb-4">
        <progress class="progress w-56" value="{food.carbohydrates}" max="100" style="width: 90%;"></progress>
    </div>
    
    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>

    <div class="stat">
        <div class="stat-title">Fats</div>
        <div class="stat-value">{food.fats}</div>
    </div>

    <div class="mb-4">
        <progress class="progress w-56" value="{food.fats}" max="100" style="width: 90%;"></progress>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>

    <div class="stat">
        <div class="stat-title">Fiber</div>
        <div class="stat-value">{food.fiber}</div>
    </div>

    <div class="mb-4">
        <progress class="progress w-56" value="{food.fiber}" max="100" style="width: 90%;"></progress>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>

    <div class="stat">
        <div class="stat-title">Sugars</div>
        <div class="stat-value">{food.sugars}</div>
    </div>

    <div class="mb-4">
        <progress class="progress w-56" value="{food.sugars}" max="100" style="width: 90%;"></progress>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>

    <div class="stat">
        <div class="stat-title">Salt</div>
        <div class="stat-value">{food.salt}</div>
    </div>

    <div class="mb-4">
        <progress class="progress w-56" value="{food.salt}" max="100" style="width: 90%;"></progress>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>
{/if}