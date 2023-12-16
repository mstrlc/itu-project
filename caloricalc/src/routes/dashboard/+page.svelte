<script>
	import { writable } from 'svelte/store';
	import Dashboard from '../../lib/components/Dashboard.svelte';

	// const date = 'Hello';
	// Create a writable store for the date
	const date = writable(new Date());

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

<p class="text-xl">Dashboard</p>

<button on:click={dayMinus} class="btn">&larr;</button>
<button on:click={dayPlus} class="btn">&rarr;</button>

<Dashboard {date} />
