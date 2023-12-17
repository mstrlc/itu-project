<script>
    import { page } from '$app/stores';
    import { getActivity , deleteActivity} from '../../../lib/api/activities';
    import { onMount } from 'svelte';

    var activity;
    onMount(async () => {
		activity = await getActivity($page.params.id);
	});

    const navigateToEditActivity = () => {
        window.location.href = '/activities/' + $page.params.id + '/edit';
    };

    const handleDeleteActivity = async () => {
        deleteActivity($page.params.id);
        window.location.href = '/activities';
    };
</script>

{#if activity}
    <button class="btn btn-primary" on:click={navigateToEditActivity}>Edit Activity</button>
    <button class="btn btn-primary" on:click={handleDeleteActivity}>Delete Activity</button>

    <div>
        <div class="text-xl font-bold">{activity.name}</div>
    </div>

    <div class="stat">
        <div class="stat-title">Calories</div>
        <div class="stat-value">{activity.calories}</div>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>
    
    <div class="stat">
        <div class="stat-title">Location</div>
        <div class="stat-value">{activity.location}</div>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>
    
    <div class="stat">
        <div class="stat-title">Start time</div>
        <div class="stat-value">{activity.time}</div>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>

    <div class="stat">
        <div class="stat-title">End time</div>
        <div class="stat-value">{activity.end}</div>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>

    <div class="stat">
        <div class="stat-title">Type</div>
        <div class="stat-value">{activity.type}</div>
    </div>

    <div class="flex flex-col w-full">
        <div class="divider"></div>
    </div>
{/if}