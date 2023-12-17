<script>
    /** @type {import('./$types').PageData} */
    import { createFood } from '../../../lib/api/foods';
    let name = '';
    let calories = 0;
    let proteins = 0;
    let carbohydrates = 0;
    let fats = 0;
    let fiber = 0;
    let sugars = 0;
    let salt = 0;

    const handleCreateFood = async () => {
        createFood(name, calories, proteins, carbohydrates, fats, fiber, sugars, salt);
        window.location.href = `/foods`;
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
            <span class="label-text">Calories</span>
        </div>
        <input type="number" bind:value={calories} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Proteins</span>
        </div>
        value: {proteins}
        <input type="range" min="0" max="100" bind:value={proteins} step="0.1" class="range range-info" />
        <div class="label">
            <span class="label-text">Carbohydrates</span>
        </div>
        value: {carbohydrates}
        <input type="range" min="0" max="100" bind:value={carbohydrates} step="0.1" class="range range-info" />
        <div class="label">
            <span class="label-text">Fats</span>
        </div>
        value: {fats}
        <input type="range" min="0" max="100" bind:value={fats} step="0.1" class="range range-info" />
        <div class="label">
            <span class="label-text">Fiber</span>
        </div>
        value: {fiber}
        <input type="range" min="0" max="100" bind:value={fiber} step="0.1" class="range range-info" />
        <div class="label">
            <span class="label-text">Sugars</span>
        </div>
        value: {sugars}
        <input type="range" min="0" max="100" bind:value={sugars} step="0.1" class="range range-info" />
        <div class="label">
            <span class="label-text">Salt</span>
        </div>
        value: {salt}
        <input type="range" min="0" max="100" bind:value={salt} step="0.1" class="range range-info" />
    </label>
    <button class="btn btn-primary" on:click={handleCreateFood}>Create food</button>
</div>