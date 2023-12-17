<script>
    /** @type {import('./$types').PageData} */
    import { getActivities } from '../../lib/api/activities';
	var activities;

    import { onMount } from 'svelte';

    // let selected;
    // const type_list = ["walk", "strength"];
    

    // async function SelectType() {
    //     const res = await fetch('/api/activities');
    //     var json = await res.json();
    //     if (selected == "Pick type") {
    //         activities = json;
    //     } else {
    //     activities = json.filter(activity => activity.type == selected);
    //     }
    // } 
    onMount(async () => {
        activities = await getActivities();
    });

    const navigateToActivityDetail = (id) => {
        window.location.href = '/activities/' + id + '/';
    };

    const navigateToAddActivity = () => {
        window.location.href = '/activities/add';
    };

</script>


<div class="overflow-x-auto">
    <!-- <select class="select select-bordered w-full max-w-xs" bind:value={selected} on:click={SelectType}>
        <option>Pick type</option>
        {#each type_list as type}
        <option value={type}>
            {type}
        </option>
    {/each}
      </select> -->
    <button class="btn btn-primary" on:click={navigateToAddActivity}>Add Activity</button>
	<table class="table">
		<thead>
			<tr>
				<th>Start</th>
				<th>Type</th>
				<th>Calories</th>
			</tr>
		</thead>
		<tbody>
            {#if activities}
                {#each activities as activity}
                    <tr>
                        <td>
                          <div class="flex items-center gap-3">
                            
                            <div>
                              <div class="font-bold">{activity.name}</div>
                            </div>
                          </div>
                        </td>
                        <td>{activity.time}</td>
                        <td>{activity.type}</td>
                        <td>{activity.calories} kcal</td>
                        <th>
                          <button class="btn btn-xs" on:click={navigateToActivityDetail(activity.id)}>Details</button>
                        </th>
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