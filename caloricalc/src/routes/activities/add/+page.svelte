<script>
    /** @type {import('./$types').PageData} */
    import { createActivity } from '../../../lib/api/activities';
    let name = '';
    let calories = 0;
    let location = '';
    let time = '';
    let end = '';
    let type = '';

    const handleCreateActivity = async () => {
        createActivity(name, location, time, end, type, calories);
        window.location.href = `/activities`;
    };
    
</script>

<div>
    <h1>Add activity</h1>
    <label class="form-control w-full max-w-xs">
        <div class="label">
          <span class="label-text">Name</span>
        </div>
        <input type="text" bind:value={name} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Calories</span>
        </div>
        <input type="number" bind:value={calories} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Location</span>
        </div>
        <input type="text" bind:value={location} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Start time</span>
        </div>
        <input type="datetime-local" bind:value={time} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">End time</span>
        </div>
        <input type="datetime-local" bind:value={end} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <div class="label">
            <span class="label-text">Type</span>
        </div>
        <input type="text" bind:value={type} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </label>
    <button class="btn btn-primary" on:click={handleCreateActivity}>Create activity</button>
</div>