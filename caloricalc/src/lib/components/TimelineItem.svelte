<script>
	export let item;
</script>

<li>
	<div class="timeline-start"><time>{item.time.split('T')[1].slice(0, -3)}</time></div>
	<div class="timeline-middle">
		{#if item.location != null}
			<span class="material-symbols-outlined">directions_run</span>
		{/if}
		{#if item.location == null}
			<span class="material-symbols-outlined">restaurant</span>
		{/if}
	</div>
	<div class="timeline-end timeline-box mb-5 mt-5">
		<div class="text-lg font-bold">{item.name}</div>
		{#if item.location != null}
			<div class="text-sm">{item.calories} kcal</div>
		{/if}
	</div>
	<hr />
</li>
