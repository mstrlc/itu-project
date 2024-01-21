<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
</script>

<Navbar />

<div class="h-screen">
	<div class="container mx-auto px-32">
		<div class="h-12" />
		<slot />
	</div>
</div>
