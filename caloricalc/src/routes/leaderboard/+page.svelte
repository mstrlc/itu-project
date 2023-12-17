<script>
	import { getUser } from '../lib/api/user';
	Users = [];
	async function loadUsers() {
		Users = user.getUsers();
	}
	
</script>

<div>
	<button class="btn btn-primary" on:click={loadUsers}>Load Users</button>
	<button class="btn btn-primary" on:click={user.createUser}>Load Users</button>
	<table class="table table-zebra">
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
			{#if Users}
				{#each Users as food}
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
				{/each}
			{:else}
			<tr>
				<td colspan="9">No data</td>
			</tr>
			{/if}
		</tbody>
	</table>
</div>
