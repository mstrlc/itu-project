<script>
    export let date;

    import { onMount, afterUpdate } from 'svelte';
    import { getMeals, getMealsMacros } from '../api/meals';

    let currentDate;

    let values = {
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fats: 0,
      fiber: 0,
      sugar: 0,
      salt: 0
    };

    $: currentDate = $date.toLocaleDateString('sv-SE');

        onMount(async () => {
            values.calories = Math.floor(Math.random() * 2500);
            values.protein = Math.floor(Math.random() * 100);
            values.carbohydrates = Math.floor(Math.random() * 300);
            values.fats = Math.floor(Math.random() * 70);
            values.fiber = Math.floor(Math.random() * 30);
            values.sugar = Math.floor(Math.random() * 50);
            values.salt = Math.floor(Math.random() * 6);
            console.log(values);
        });
    </script>

<p>{currentDate}</p>

<div>
    <div class="items-center">
        <div class="text-xl font-black">Macros</div>
        <div class="mb-4">
            <h3 class="text-xl font-bold">Calories</h3>
            <progress class="progress w-56" value={values.calories} max="2500" style="width: 90%;" />
            <p>{values.calories} calories</p>
            <p>{((values.calories / 2500) * 100).toFixed(2)}%</p>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-bold">Protein</h3>
            <progress class="progress w-56" value={values.protein} max="100" style="width: 90%;" />
            <p>{values.protein} grams</p>
            <p>{((values.protein / 100) * 100).toFixed(2)}%</p>
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
            <h3 class="text-xl font-bold">Sugar</h3>
            <progress class="progress w-56" value={values.sugar} max="50" style="width: 90%;" />
            <p>{values.sugar} grams</p>
            <p>{((values.sugar / 50) * 100).toFixed(2)}%</p>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-bold">Salt</h3>
            <progress class="progress w-56" value={values.salt} max="6" style="width: 90%;" />
            <p>{values.salt} grams</p>
            <p>{((values.salt / 6) * 100).toFixed(2)}%</p>
        </div>
    </div>
</div>
