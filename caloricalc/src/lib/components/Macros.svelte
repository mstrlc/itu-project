<!-- Author: xstrel03
Date: 19.1.2023 -->

<script>
	export let date;

	import { onMount } from 'svelte';
	import { getMacros } from '../api/macros';
	import MacroList from './MacroList.svelte';

	$: currentDate = $date.toLocaleDateString('sv-SE');

    var macros;
	var items = [];

	onMount(async () => {
		macros = await getMacros();
		items = items.concat(macros);
	});
</script>

<div>
	<div class="text-xl font-black">Macros</div>
		{#if items}
            {#each items as item}
                {#if item.date == currentDate}
                    <MacroList {item} />
                {/if}
            {/each}
		{/if}
</div>
