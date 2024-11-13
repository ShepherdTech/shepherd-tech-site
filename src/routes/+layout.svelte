<script lang="ts">
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';

	import '../app.css';
</script>

<div class="flex min-h-screen flex-col bg-black">
	<Header />

	<main class="flex-1 pt-4">
		<img src="favicon.png" alt="logo" class="h-20 w-20" />
		<slot />
	</main>

	<Footer />
</div>
