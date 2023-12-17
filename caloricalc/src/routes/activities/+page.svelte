<!-- Author: xnovym00
Date: 17.12.2023 -->
<script>
    /** @type {import('./$types').PageData} */
    import { getActivities } from '../../lib/api/activities';
	var activities;

    import { onMount } from 'svelte';
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