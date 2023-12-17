<script>
	import Layout from '../+layout.svelte';
	import { getUser, createUser } from '../../lib/api/user';
	import { onMount } from 'svelte';
	import ContentLayout from '../../lib/components/content-Layout.svelte';
	let Users = [];
	async function loadUsers() {
		Users = await getUser();
		console.log(Users);
	}
	async function sendUser() {
		Users = await createUser("Max", "2023-17-12", "115", "200", "helicopter" );
		console.log(Users);
	}
	onMount(async () => {
        Users = await getUser();
    });
</script>

<div class="h-4/5">
	<button class="btn btn-primary" on:click={loadUsers}>Load Users</button>
	<button class="btn btn-primary" on:click={sendUser}>createUsers</button>
	<ContentLayout>
		<div  slot="1" class="overflow-x-auto">
		<table >
		<thead >
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

						<td>{food.name}</td>

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
	<table slot="3">
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

						<td>{food.name}</td>

					</tr>
				{/each}
			{:else}
			<tr>
				<td colspan="9">No data</td>
			</tr>
			{/if}
		</tbody>
	</table>
	<table slot="2" >
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

						<td>{food.name}</td>

					</tr>
				{/each}
			{:else}
			<tr>
				<td colspan="9">No data</td>
			</tr>
			{/if}
		</tbody>
	</table>
	<table slot="4" >
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

						<td>{food.name}</td>

					</tr>
				{/each}
			{:else}
			<tr>
				<td colspan="9">No data</td>
			</tr>
			{/if}
		</tbody>
	</table>

</ContentLayout>
</div>
