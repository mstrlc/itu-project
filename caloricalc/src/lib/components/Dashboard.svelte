<!-- Author: xstrel03
Date: 17.12.2023 -->
<script>
	import { writable, get } from 'svelte/store';
	import Timeline from './Timeline.svelte';
	import Macros from './Macros.svelte';

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

<p>{$date.toLocaleDateString('sv-SE')}</p>

<div class="flex">
	<div class="w-1/3">
		<Timeline {date} />
	</div>
	<div class="w-2/3">
		<Macros {date} />
	</div>
</div>
