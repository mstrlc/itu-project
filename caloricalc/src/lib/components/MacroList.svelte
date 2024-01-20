<!-- Author: xstrel03
Date: 19.1.2023 -->

<script>
	import { onMount } from 'svelte';
    import { getUserGoals } from '../api/user';

	export let item;

    let goalsPromise;

	onMount(async () => {
        goalsPromise = await getUserGoals();
	});
</script>

{#await goalsPromise then goals}
    {#if goals}
    <div class="mb-4">
        <h3 class="text-xl font-bold">Calories</h3>
        <progress class="progress w-56" value={item.calories} max={goals.calories} style="width: 90%;" />
        <p>{item.calories} kcal / {goals.calories} kcal </p>
        <p>{((item.calories / goals.calories) * 100).toFixed(0)}%</p>
    </div>
    <div class="mb-4">
        <h3 class="text-xl font-bold">Protein</h3>
        <progress class="progress w-56" value={item.proteins} max={goals.proteins} style="width: 90%;" />
        <p>{item.proteins} g / {goals.proteins} g</p>
        <p>{((item.proteins / goals.proteins) * 100).toFixed(0)}%</p>
    </div>
    <div class="mb-4">
        <h3 class="text-xl font-bold">Carbohydrates</h3>
        <progress class="progress w-56" value={item.carbohydrates} max={goals.carbohydrates} style="width: 90%;" />
        <p>{item.carbohydrates} g / {goals.carbohydrates} g</p>
        <p>{((item.carbohydrates / goals.carbohydrates) * 100).toFixed(0)}%</p>
    </div>
    <div class="mb-4">
        <h3 class="text-xl font-bold">Fats</h3>
        <progress class="progress w-56" value={item.fats} max={goals.fats} style="width: 90%;" />
        <p>{item.fats} g / {goals.fats} g</p>
        <p>{((item.fats / goals.fats) * 100).toFixed(0)}%</p>
    </div>
    <div class="mb-4">
        <h3 class="text-xl font-bold">Fiber</h3>
        <progress class="progress w-56" value={item.fiber} max={goals.fiber} style="width: 90%;" />
        <p>{item.fiber} g / {goals.fiber} g</p>
        <p>{((item.fiber / goals.fiber) * 100).toFixed(0)}%</p>
    </div>
    <div class="mb-4">
        <h3 class="text-xl font-bold">Sugar</h3>
        <progress class="progress w-56" value={item.sugars} max={goals.sugars} style="width: 90%;" />
        <p>{item.sugars} g / {goals.sugars} g</p>
        <p>{((item.sugars / goals.sugars) * 100).toFixed(0)}%</p>
    </div>
    <div class="mb-4">
        <h3 class="text-xl font-bold">Salt</h3>
        <progress class="progress w-56" value={item.salt} max={goals.salt} style="width: 90%;" />
        <p>{item.salt} g / {goals.salt} g</p>
        <p>{((item.salt / goals.salt) * 100).toFixed(0)}%</p>
    </div>
    {/if}
{/await}




<!-- <script>
    export let date;

    import { onMount, afterUpdate } from 'svelte';
    import { getMeals, getMealsMacros } from '../api/meals';
    import { getMacros, getMacro } from '../api/macros';

    let currentDate;

    let values = {
      calories: 0,
      proteins: 0,
      carbohydrates: 0,
      fats: 0,
      fiber: 0,
      sugars: 0,
      salt: 0
    };

    var macros;
    var items = [];

    $: currentDate = $date.toLocaleDateString('sv-SE');

        onMount(async () => {
            macros = await getMacros();
            items = macros.map(day => day["2023-01-19"])[0];
        });
    </script>

<p>{currentDate}</p>

<div>
    <div class="items-center">
        <div class="text-xl font-black">Macros</div>
        <div class="mb-4">
            <h3 class="text-xl font-bold">Calories</h3>
            <progress class="progress w-56" value={values.calories} max="2500" style="width: 90%;" />
            <p>{items.calories} calories</p>
            <p>{((values.calories / 2500) * 100).toFixed(2)}%</p>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-bold">proteins</h3>
            <progress class="progress w-56" value={values.proteins} max="100" style="width: 90%;" />
            <p>{values.proteins} grams</p>
            <p>{((values.proteins / 100) * 100).toFixed(2)}%</p>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-bold">Carbohydrates</h3>
            <progress class="progress w-56" value={values.carbohydrates} max="300" style="width: 90%;" />
            <p>{values.carbohydrates} grams</p>
            <p>{((values.carbohydrates / 300) * 100).toFixed(2)}%</p>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-bold">Fats</h3>
            <progress class="progress w-56" value={values.fats} max="70" style="width: 90%;" />
            <p>{values.fats} grams</p>
            <p>{((values.fats / 70) * 100).toFixed(2)}%</p>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-bold">Fiber</h3>
            <progress class="progress w-56" value={values.fiber} max="30" style="width: 90%;" />
            <p>{values.fiber} grams</p>
            <p>{((values.fiber / 30) * 100).toFixed(2)}%</p>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-bold">sugars</h3>
            <progress class="progress w-56" value={values.sugars} max="50" style="width: 90%;" />
            <p>{values.sugars} grams</p>
            <p>{((values.sugars / 50) * 100).toFixed(2)}%</p>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-bold">Salt</h3>
            <progress class="progress w-56" value={values.salt} max="6" style="width: 90%;" />
            <p>{values.salt} grams</p>
            <p>{((values.salt / 6) * 100).toFixed(2)}%</p>
        </div>
    </div>
</div> -->
