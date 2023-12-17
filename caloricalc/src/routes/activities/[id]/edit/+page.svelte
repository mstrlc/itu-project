<script>
    /** @type {import('./$types').PageData} */
    import { getActivity, editActivity } from '../../../../lib/api/activities';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    const handleEditActivity = async () => {
        editActivity(activity.id, activity.name, activity.calories, activity.location, activity.time, activity.end, activity.type);
        window.location.href = '/activities/'+ activity.id + '/';
    };
    
    var activity;
    onMount(async () => {
        activity = await getActivity($page.params.id);
    });
        
    
</script>

<div>
    {#if activity}
    <h1>Edit activity</h1>
    <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Name</span>
        </div>
        <input type="text" bind:value={activity.name} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Calories</span>
        </div>
        <input type="number" bind:value={activity.calories} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Location</span>
        </div>
        <input type="text" bind:value={activity.location} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Start time</span>
        </div>
        <input type="datetime-local" bind:value={activity.time} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">End time</span>
        </div>
        <input type="datetime-local" bind:value={activity.end} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Type</span>
        </div>
        <input type="text" bind:value={activity.type} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </label>
    <button class="btn btn-primary" on:click={handleEditActivity}>Edit activity</button>
    {/if}
</div>