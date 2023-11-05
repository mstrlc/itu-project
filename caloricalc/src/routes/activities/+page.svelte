<script>
    /** @type {import('./$types').PageData} */
	var activities = [];

import { onMount } from 'svelte';

let selected;
const type_list = ["walk", "strength"];
onMount(async () => {
    const res = await fetch('/api/activities');
    var json = await res.json();
    activities = json;
});

async function SelectType() {
    const res = await fetch('/api/activities');
    var json = await res.json();
    if (selected == "Pick type") {
        activities = json;
    } else {
    activities = json.filter(activity => activity.type == selected);
    }
}

</script>


<div class="overflow-x-auto">
    <select class="select select-bordered w-full max-w-xs" bind:value={selected} on:click={SelectType}>
        <option>Pick type</option>
        {#each type_list as type}
        <option value={type}>
            {type}
        </option>
    {/each}
      </select>
	<table class="table table-zebra">
		<thead>
			<tr>
                <th>ID</th>
				<th>Name</th>
				<th>Location</th>
				<th>Start</th>
				<th>End</th>
				<th>Type</th>
				<th>Calories</th>
			</tr>
		</thead>
		<tbody>
            {#if activities}
                {#each activities as acitvity}
                    <tr>
                        <td>{acitvity.id}</td>
                        <td>{acitvity.name}</td>
                        <td>{acitvity.location}</td>
                        <td>{acitvity.start}</td>
                        <td>{acitvity.end}</td>
                        <td>{acitvity.type}</td>
                        <td>{acitvity.calories} kcal</td>
                    </tr>
                {/each}
            {:else}
            <tr>
                <td colspan="7">No data</td>
            </tr>
            {/if}
		</tbody>
	</table>
</div>