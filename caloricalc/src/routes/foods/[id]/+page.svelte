<script>
    /** @type {import('./$types').PageData} */
    import { deleteFood, editFood, getFood, getFoods } from '../../../lib/api/foods';
    let food = getFood(params.id);
</script>

<div>
    <table class="table">
		<thead>
			<tr>
                <th>ID</th>
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
		<tbody>
            <tr>
                <td>{food.id}</td>
                <td>{food.name}</td>
                <td>{food.calories} kcal</td>
                <td>{food.proteins} g</td>
                <td>{food.carbohydrates} g</td>
                <td>{food.fats} g</td>
                <td>{food.fiber} g</td>
                <td>{food.sugars} g</td>
                <td>{food.salt} g</td>
            </tr>
		</tbody>
	</table>
</div>