<script>
	import { writable, get } from 'svelte/store';
	import Timeline from '../../lib/components/Timeline.svelte';

	// Create a writable store for the date
	let date = writable(new Date());

	function dayPlus() {
		// Update the date using the set function
		date.update((d) => {
			const newDate = new Date(d);
			newDate.setDate(newDate.getDate() + 1);
			return newDate;
		});
	}

	function dayMinus() {
		// Update the date using the set function
		date.update((d) => {
			const newDate = new Date(d);
			newDate.setDate(newDate.getDate() - 1);
			return newDate;
		});
	}
</script>

<div>
	<div class="text-xl font-bold">Dashboard</div>
</div>

<button on:click={dayMinus} class="btn">&larr;</button>
<button on:click={dayPlus} class="btn">&rarr;</button>

<Timeline class="flex" {date}/>
